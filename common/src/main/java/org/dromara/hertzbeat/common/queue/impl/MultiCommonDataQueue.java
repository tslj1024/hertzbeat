package org.dromara.hertzbeat.common.queue.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

/**
 * queue0 start ---offer---> data1 ---> data2 ---> data3 ---poll---
 * -------------------------------------------------------'
 * queue1 '---offer---> data3 ---> data4 ---> data5 ---poll--------
 * -------------------------------------------------------'
 * queue2 '---offer---> data5 ---> data6 ---> data7 ---poll---> end
 *
 * <p>多消费者消费同一个Queue</p>
 *
 * @author ceilzcx
 * @since 23/5/2023
 */
public class MultiCommonDataQueue<T> {

    /**
     * 数据存储的Queue集合
     */
    private final List<LinkedBlockingQueue<T>> dataList;

    /**
     * 消费者消费偏移量
     */
    private int[] offsetList;

    private final Lock lock = new ReentrantLock();

    private final Lock waitLock = new ReentrantLock();

    private final Condition waitCondition = waitLock.newCondition();

    public MultiCommonDataQueue(int size) {
        this.dataList = new ArrayList<>(size);
        this.offsetList = new int[size];

        for (int i = 0; i < size; i++) {
            offsetList[i] = 0;
            dataList.add(new LinkedBlockingQueue<>());
        }
    }

    /**
     * 向Queue中添加数据, 只往第一个Queue添加
     *
     * @param data 采集数据
     */
    public void offer(T data) {
        dataList.get(0).offer(data);
    }

    /**
     * Queue消费数据
     * 思路: 先确认应该消费哪个Queue, 根据偏移量计算; 成功获取数据后, 修改偏移量, 并将数据放入下一个Queue
     *
     * @param i 消费者index
     * @return 采集数据
     * @throws InterruptedException 中断异常
     */
    public T poll(int i) throws InterruptedException {
        // 消费第几个Queue, offset越小代表消费的数据越少, 更应该消费靠下的Queue
        int position = 0;
        T data = null;
        LinkedBlockingQueue<T> queue;
        try {
            this.lock.lock();
            int presentOffset = this.offsetList[i];
            for (int offset : this.offsetList) {
                if (offset > presentOffset) {
                    position++;
                }
            }
            queue = this.dataList.get(position);
            // 消费数据不为null, 偏移量+1
            if (!queue.isEmpty()) {
                this.offsetList[i]++;
                data = queue.poll();
                if (position + 1 < this.dataList.size()) {
                    // 将消费的数据放入下一个Queue
                    this.dataList.get(position + 1).offer(data);
                }
            }
        } finally {
            this.lock.unlock();
        }
        if (data != null) {
            System.out.printf("time=%d, i=%d, position=%d, offset=%d, offsetList=%s, queueSizeList=%s, data=%s\n",
                    System.currentTimeMillis(), i, position, offsetList[i], Arrays.toString(offsetList),
                    Arrays.toString(dataList.stream().map(LinkedBlockingQueue::size).toArray()), "not null");
            return data;
        }

        System.out.printf("time=%d, i=%d, position=%d, offset=%d, offsetList=%s, queueSizeList=%s, data=%s\n",
                System.currentTimeMillis(), i, position, offsetList[i], Arrays.toString(offsetList),
                Arrays.toString(dataList.stream().map(LinkedBlockingQueue::size).toArray()), "null");

        this.waitLock.lockInterruptibly();
        try {
            long nanos = TimeUnit.SECONDS.toNanos(2);
            while (true) {
                if (nanos <= 0L) {
                    return null;
                }
                nanos = this.waitCondition.awaitNanos(nanos);
            }
        } finally {
            this.waitLock.unlock();
        }
    }

    public int[] getQueueSizeMetricsInfo() {
        int[] queueSizeInfo = new int[dataList.size()];
        int minOffset = offsetList[0];
        for (int i = 1; i < offsetList.length; i++) {
            minOffset = Math.min(minOffset, offsetList[i]);
        }
        int sumSize = dataList.stream().mapToInt(LinkedBlockingQueue::size).sum();
        for (int i = 0; i < offsetList.length; i++) {
            queueSizeInfo[i] = sumSize - offsetList[i] + minOffset;
        }
        return queueSizeInfo;
    }

    public void clear() {
        for (LinkedBlockingQueue<T> queue : this.dataList) {
            queue.clear();
        }
        this.dataList.clear();
        this.offsetList = null;
    }
}
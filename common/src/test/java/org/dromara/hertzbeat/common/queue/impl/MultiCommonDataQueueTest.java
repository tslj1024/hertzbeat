package org.dromara.hertzbeat.common.queue.impl;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;

import java.util.concurrent.CountDownLatch;

import static org.junit.jupiter.api.Assertions.*;

/**
 * test for MultiCommonDataQueue
 * @author tom
 */
@Slf4j
class MultiCommonDataQueueTest {
	
	@Test
	void offer() {
		MultiCommonDataQueue<String> multiDataQueue = new MultiCommonDataQueue<>(3);
		for (int i = 0; i < 100; i++) {
			multiDataQueue.offer("data" + i);
		}
		CountDownLatch latch = new CountDownLatch(3);
		new Thread(() -> {
			try {
				for (int i = 0; i < 100; i++) {
					multiDataQueue.poll(0);
				}
				latch.countDown();
			} catch (InterruptedException ignored) {}
		}).start();
		new Thread(() -> {
			try {
				for (int i = 0; i < 100; i++) {
					multiDataQueue.poll(1);
				}
				latch.countDown();
			} catch (InterruptedException ignored) {}
		}).start();
		new Thread(() -> {
			try {
				for (int i = 0; i < 100; i++) {
					multiDataQueue.poll(2);
				}
				latch.countDown();
			} catch (InterruptedException ignored) {}
		}).start();
		try {
			latch.await();
		} catch (InterruptedException ignored) {}
		int[] queueSize = multiDataQueue.getQueueSizeMetricsInfo();
		assertEquals(3, queueSize.length);
		assertEquals(0, queueSize[0]);
		assertEquals(0, queueSize[1]);
		assertEquals(0, queueSize[2]);
	}
	
	@Test
	void poll() {
		long startTime = System.currentTimeMillis();
		MultiCommonDataQueue<Integer> multiDataQueue = new MultiCommonDataQueue<>(5);
		for (int i = 0; i < 1000; i++) {
			multiDataQueue.offer( i);
		}
		CountDownLatch latch = new CountDownLatch(5);
		new Thread(() -> {
			try {
				for (int i = 0; i < 1000; i++) {
					assertEquals(i, multiDataQueue.poll(0));
				}
				latch.countDown();
			} catch (InterruptedException ignored) {}
		}).start();
		new Thread(() -> {
			try {
				for (int i = 0; i < 700; i++) {
					assertEquals(i, multiDataQueue.poll(1));
				}
				latch.countDown();
			} catch (InterruptedException ignored) {}
		}).start();
		new Thread(() -> {
			try {
				for (int i = 0; i < 500; i++) {
					assertEquals(i, multiDataQueue.poll(2));
				}
				latch.countDown();
			} catch (InterruptedException ignored) {}
		}).start();
		new Thread(() -> {
			try {
				for (int i = 0; i < 300; i++) {
					assertEquals(i, multiDataQueue.poll(3));
				}
				latch.countDown();
			} catch (InterruptedException ignored) {}
		}).start();
		new Thread(() -> {
			try {
				for (int i = 0; i < 100; i++) {
					assertEquals(i, multiDataQueue.poll(4));
				}
				latch.countDown();
			} catch (InterruptedException ignored) {}
		}).start();
		try {
			latch.await();
		} catch (InterruptedException ignored) {}
		log.info("MultiCommonDataQueue poll test spend: {} ms.", System.currentTimeMillis() - startTime);
		int[] queueSize = multiDataQueue.getQueueSizeMetricsInfo();
		assertEquals(5, queueSize.length);
		assertEquals(0, queueSize[0]);
		assertEquals(300, queueSize[1]);
		assertEquals(500, queueSize[2]);
		assertEquals(700, queueSize[3]);
		assertEquals(900, queueSize[4]);
	}
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.dromara.hertzbeat.common.queue.impl;

import org.dromara.hertzbeat.common.entity.alerter.Alert;
import org.dromara.hertzbeat.common.entity.message.CollectRep;
import org.dromara.hertzbeat.common.queue.CommonDataQueue;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;

/**
 * 内存采集数据队列实现
 * @author tom
 *
 */
@Configuration
@ConditionalOnProperty(prefix = "common.queue", name = "type", havingValue = "Memory",
        matchIfMissing = true)
@Slf4j
public class InMemoryCommonDataQueue implements CommonDataQueue, DisposableBean {

    private final LinkedBlockingQueue<Alert> alertDataQueue;
    private final MultiCommonDataQueue<CollectRep.MetricsData> metricsDataQueue;

    public InMemoryCommonDataQueue() {
        alertDataQueue = new LinkedBlockingQueue<>();
        metricsDataQueue = new MultiCommonDataQueue<>(3);
    }

    public Map<String, Integer> getQueueSizeMetricsInfo() {
        Map<String, Integer> metrics = new HashMap<>(8);
        metrics.put("alertDataQueue", alertDataQueue.size());
        int[] queueSizeMetricsInfo = metricsDataQueue.getQueueSizeMetricsInfo();
        metrics.put("metricsDataToAlertQueue", queueSizeMetricsInfo[0]);
        metrics.put("metricsDataToPersistentStorageQueue", queueSizeMetricsInfo[1]);
        metrics.put("metricsDataToMemoryStorageQueue", queueSizeMetricsInfo[2]);
        return metrics;
    }

    @Override
    public void addAlertData(Alert alert) {
        alertDataQueue.offer(alert);
    }

    @Override
    public Alert pollAlertData() throws InterruptedException {
        return alertDataQueue.poll(2, TimeUnit.SECONDS);
    }

    @Override
    public CollectRep.MetricsData pollAlertMetricsData() throws InterruptedException {
        return metricsDataQueue.poll(0);
    }

    @Override
    public CollectRep.MetricsData pollPersistentStorageMetricsData() throws InterruptedException {
        return metricsDataQueue.poll(1);
    }

    @Override
    public CollectRep.MetricsData pollRealTimeStorageMetricsData() throws InterruptedException {
        return metricsDataQueue.poll(2);
    }

    @Override
    public void sendMetricsData(CollectRep.MetricsData metricsData) {
        metricsDataQueue.offer(metricsData);
    }

    @Override
    public void destroy() {
        alertDataQueue.clear();
        metricsDataQueue.clear();
    }
}

package org.dromara.hertzbeat.push.service;

import org.springframework.stereotype.Service;

/**
 * push metrics
 *
 * @author vinci
 */
@Service
public interface PushGatewayService {
    void pushMetrics(String jobName, String instanceName, String metrics);

    String getMetrics();
}

package org.dromara.hertzbeat.push.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.dromara.hertzbeat.common.entity.dto.Message;
import org.dromara.hertzbeat.common.entity.push.PushMetricsDto;
import org.dromara.hertzbeat.push.service.PushGatewayService;
import org.dromara.hertzbeat.push.service.PushService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

/**
 * push gateway controller
 *
 * @author vinci
 */
@Tag(name = "Metrics Push Gateway API | 监控数据推送网关API")
@RestController
@RequestMapping(value = "/api/push/metrics", produces = {APPLICATION_JSON_VALUE})
public class PushGatewayController {

    @Autowired
    private PushGatewayService pushGatewayService;

    @PostMapping("/job/{jobName}/instance/{instanceName}")
    @Operation(summary = "Push metric data to hertzbeat pushgateway", description = "推送监控数据到hertzbeat推送网关")
    public ResponseEntity<Message<Void>> pushMetrics(@PathVariable String jobName, @PathVariable  String instanceName, @RequestBody String metrics) {
        metrics = URLDecoder.decode(metrics, StandardCharsets.UTF_8);
        pushGatewayService.pushMetrics(jobName, instanceName, metrics);
        return ResponseEntity.ok(Message.success("Push success"));
    }
    @GetMapping()
    @Operation(summary = "get metrics from hertzbeat pushgateway", description = "从hertzbeat推送网关获取推送的监控数据")
    public String pushMetrics() {
        return pushGatewayService.getMetrics();
    }
}

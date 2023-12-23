package org.dromara.hertzbeat.push.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.dromara.hertzbeat.common.cache.CacheFactory;
import org.dromara.hertzbeat.common.cache.ICacheService;
import org.dromara.hertzbeat.common.entity.dto.Message;
import org.dromara.hertzbeat.push.service.PushGatewayService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Map;
import java.util.Set;
import java.util.TreeSet;

/**
 * push service impl
 *
 * @author vinci
 */
@Slf4j
@Service
public class PushGatewayServiceImpl implements PushGatewayService {

    private static final String separator = "/";

    private static final Set<String> instanceSet = new TreeSet<>();

    public void pushMetrics(@PathVariable String jobName, @PathVariable String instanceName, @RequestBody String metrics) {
        ICacheService<String, Object> pushGatewayCache = CacheFactory.getPushGatewayCache();
        String key = jobName + separator + instanceName;
        // TODO: cache好像没有遍历所有key的接口，要怎么生成pushgateway的/metrics页呢？
        instanceSet.add(key);
        // TODO：这里的逻辑和prometheus也不一样，prometheus的pushgateway会给每个指标加上job和instance作为label，和原有的label一起用于区分指标。但是我们
        // TODO：的这个由于不解析字符串，就不能做到label的添加，和prometheus的行为有区别，而且如果用户用不同的instance和job来push相同的数据，我们会认为这两个字符串是不同的，但是在metrics里显示的是两组一样的数据的。。
        pushGatewayCache.put(key, metrics);
    }

    public String getMetrics() {
        String res = new String();
        ICacheService<String, Object> pushGatewayCache = CacheFactory.getPushGatewayCache();
        for (String key : instanceSet) {
            res += pushGatewayCache.get(key);
            //TODO: 是否需要添加回车？
            res += '\n';
        }
        return res;
    }
}

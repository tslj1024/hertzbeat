package org.dromara.hertzbeat.manager.service.impl;

import java.util.List;
import javax.annotation.Resource;
import org.dromara.hertzbeat.common.entity.manager.AppSetting;
import org.dromara.hertzbeat.manager.dao.AppSettingDao;
import org.dromara.hertzbeat.manager.service.AppSettingService;
import org.springframework.stereotype.Service;

/**
 * app setting service impl
 */
@Service
public class AppSettingServiceImpl implements AppSettingService {
    @Resource
    private AppSettingDao appSettingDao;

    @Override
    public List<AppSetting> findAll() {
        return appSettingDao.findAll();
    }

    @Override
    public void switchAppSettingDisplay(String appName) {
        List<AppSetting> appSettingList = appSettingDao.findByAppName(appName);
        if (appSettingList.isEmpty()) {
            return;
        }
        AppSetting appSetting = appSettingList.get(0);
        appSetting.setDisplay(!appSetting.isDisplay());
        appSettingDao.save(appSetting);
    }

    @Override
    public AppSetting getAppSetting(String appName) {
        return null;
    }
}

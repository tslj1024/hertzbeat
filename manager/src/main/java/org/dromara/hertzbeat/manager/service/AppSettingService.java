package org.dromara.hertzbeat.manager.service;

import java.util.List;
import org.dromara.hertzbeat.common.entity.manager.AppSetting;

/**
 * app setting service
 */
public interface AppSettingService {

    /**
     * fetch all app setting
     * @return app setting list
     */
    List<AppSetting> findAll();

    /**
     * enable or disable app setting
     * @param appName app name
     */
    void switchAppSettingDisplay(String appName);

    /**
     * get app name setting
     * @param appName app name
     * @return app setting
     */
    AppSetting getAppSetting(String appName);

}

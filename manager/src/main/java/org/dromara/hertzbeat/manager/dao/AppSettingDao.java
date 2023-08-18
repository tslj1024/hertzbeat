package org.dromara.hertzbeat.manager.dao;

import java.util.List;
import org.dromara.hertzbeat.common.entity.manager.AppSetting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * app setting repository
 */
public interface AppSettingDao extends JpaRepository<AppSetting, Long>, JpaSpecificationExecutor<AppSetting> {

    List<AppSetting> findByAppName(String appName);

}

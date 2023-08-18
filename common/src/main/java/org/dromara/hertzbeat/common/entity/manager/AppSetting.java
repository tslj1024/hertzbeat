package org.dromara.hertzbeat.common.entity.manager;

import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import static io.swagger.v3.oas.annotations.media.Schema.AccessMode.READ_ONLY;
import static io.swagger.v3.oas.annotations.media.Schema.AccessMode.READ_WRITE;

@Entity
@Table(name = "hzb_app_setting")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "app setting | 监控设置")
@EntityListeners(AuditingEntityListener.class)
public class AppSetting {

    @Id
    @Schema(title = "监控类型设置ID", example = "1", accessMode = READ_ONLY)
    private Long id;

    @Schema(title = "监控类型名称", example = "windows", accessMode = READ_WRITE)
    @Length(max = 100)
    private String appName;

    @Schema(title = "是否展示", example = "true", accessMode = READ_WRITE)
    private boolean display;

    @Schema(title = "此条记录创建者", example = "tom", accessMode = READ_ONLY)
    @CreatedBy
    private String creator;

    @Schema(title = "此条记录最新修改者", example = "tom", accessMode = READ_ONLY)
    @LastModifiedBy
    private String modifier;

    @Schema(title = "记录创建时间", example = "1612198922000", accessMode = READ_ONLY)
    @CreatedDate
    private LocalDateTime gmtCreate;

    @Schema(title = "记录最新修改时间", example = "1612198444000", accessMode = READ_ONLY)
    @LastModifiedDate
    private LocalDateTime gmtUpdate;
}

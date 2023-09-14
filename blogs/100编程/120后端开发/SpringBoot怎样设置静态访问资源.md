---
title: SpringBoot怎样设置静态访问资源?
date: 2023-09-08 14:04
tags:
 - SpringBoot
 - 静态访问资源
categories:
 - 工作
---

# SpringBoot怎样设置静态访问资源?



创建一个配置文件WebMvcConfig.java,内容如下

```java

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

/**
 * @author 0461
 */
@Configuration
public class WebMvcConfig extends WebMvcConfigurationSupport {

    private final String rootPath = System.getProperty("user.dir");

    @Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 使用项目根目录的图片文件夹作为对外开放访问目录
        // 这种方式上传图片数据库就可存储相对路径，方便单体项目迁移部署
        String path = "file:"+rootPath+"/img/";
        // 这里的设置可以以img前缀访问img目录下的所有文件，不限制类型
        registry.addResourceHandler("/img/**").addResourceLocations(path);
    }

}
```



这样就可以通过[20230904103211.png (1600×767)](http://localhost:8080/img/20230904103211.png)这种访问链接直接访问图片


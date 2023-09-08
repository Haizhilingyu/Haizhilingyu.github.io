---
title: Java提供文件下载
date: 2023-09-08 16:07
tags:
 - 文件下载
categories:
 - 工作
---

# Java提供文件下载

记录下Java提供下载文件的几种方式



[直接访问资源](./SpringBoot怎样设置静态访问资源.html)



## Java本地流式输出

Java接口导出示例

```java
 	/**
     * 单插件导出
     *
     * @param pluginId 单个插件导出
     */
    @GetMapping("/download")
    @ApiOperation("单插件导出")
    @SysLogs("单插件导出")
    public void download(@RequestParam("pluginId") String pluginId, HttpServletResponse response) throws IOException {
        PluginConfig plugin = iPluginConfigService.getById(pluginId);
        String type = new MimetypesFileTypeMap().getContentType(plugin.getUploadFileName());
        // 设置contenttype，即告诉客户端所发送的数据属于什么类型
        response.setHeader("Content-type", type);
        // 设置扩展头，当Content-Type 的类型为要下载的类型时 , 这个信息头会告诉浏览器这个文件的名字和类型。
        response.setHeader("Content-Disposition", "attachment;filename=" + plugin.getUploadFileName());
        FileUtils.copyFile(new File(pluginService.getPluginsPackagePath() + plugin.getUploadFileName()), response.getOutputStream());
    }
```



## Java网络流式输出

Java接口网络文件下载示例

```java
 	/**
     * 下载网络文件
     *
     * @param url 网络文件http/https地址
     */
    @GetMapping("/download")
    @ApiOperation("下载网络文件")
    @SysLogs("下载网络文件")
    public void download(@RequestParam("url") String url, HttpServletResponse response) throws IOException {
        String fileName = UrlUtils.getFileName(url);
        // 设置文件ContentType类型，这样设置，会自动判断下载文件类型  
        response.setContentType("multipart/form-data");
        // 设置扩展头，当Content-Type 的类型为要下载的类型时 , 这个信息头会告诉浏览器这个文件的名字和类型。
        response.setHeader("Content-Disposition", "attachment;filename=" + fileName);
        InputStream in = HttpUtils.getFileStream(url);
        FileUtils.copyFile(in, response.getOutputStream());
    }
```



## Java文件夹流式压缩下载
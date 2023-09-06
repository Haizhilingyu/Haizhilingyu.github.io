---
title: 常用shell命令
date: 2023/08/29
---

# 常用shell命令

## ssh登录

需自行修改user为登录用户，host为登录服务器ip，特殊端口还需要修改22为指定端口

```shell
ssh user@host -p 22
```



## 生成私钥

执行下面命令一路回车

```shell
ssh-keygen -t rsa -b 4096
```

推送公钥至目标服务器，需自行修改user和host

```shell
ssh-copy-id -i ~/.ssh/id_rsa.pub user@host
```

查看公钥

```shell
cat ~/.ssh/id_rsa.pub
```

## 传输文件命令

### 获取服务器文件命令
```shell
scp root@10.2.15.220:/root/xwh/111.zip ./
```
### 发送文件到服务器目录命令
```shell
scp ./111.zip root@10.2.15.220:/root/xwh/
```

## Centos

### 查看Centos的版本号
```shell
cat /etc/centos-release
```

## 通用

### 文件和目录操作

- `ls`：列出目录内容
- `cd`：切换目录
- `pwd`：显示当前工作目录
- `mkdir`：创建新目录
- `rm`：删除文件或目录
- `cp`：复制文件或目录
- `mv`：移动文件或目录
- `touch`：创建空文件或更新文件时间戳

### 文件查看和编辑

- `cat`：显示文件内容
- `more`：逐页显示文件内容
- `less`：与`more`类似，但支持向前翻页
- `head`：显示文件开头部分
- `tail`：显示文件结尾部分
- `vi`：文本编辑器

### 文件权限

- `chmod`：修改文件权限
- `chown`：修改文件所有者
- `chgrp`：修改文件所属组

### 进程管理

- `ps`：显示进程状态
- `top`：动态显示进程状态
- `kill`：终止进程

### 网络工具

- `ping`：测试与主机的连通性
- `ifconfig`：显示和配置网络接口
- `netstat`：显示网络连接和统计信息
- `ssh`：远程登录安全外壳协议
- `scp`：安全地复制文件和目录
- `wget`：非交互式网络下载工具

### 压缩和解压缩

- `tar`：创建和提取tar归档文件
- `gzip`：压缩文件
- `gunzip`：解压缩文件

### 系统信息

- `uname`：显示系统信息
- `whoami`：显示当前用户
- `df`：显示磁盘空间使用情况
- `free`：显示内存使用情况

这只是一些常见的Linux命令示例列表，还有很多其他命令可供使用。可以使用`man`命令来查看每个命令的详细说明和用法。



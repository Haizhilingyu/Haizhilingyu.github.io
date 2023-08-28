---
title: 常用ssh命令
date: 2023/08/28
---



# 常用ssh命令



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


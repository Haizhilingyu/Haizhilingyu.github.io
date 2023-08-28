---
title: 常用git命令
date: 2023/08/28
---



# 常用git命令



## 变基拉取

```shell
git pull --rebase
```

全局设置pull/push自动变基拉取

```shell
git config --global pull.rebase true
git config --global rebase.autoStash true
```



## 回退单个提交文件

```shell
git reset "513a237a9c52c76460bb0b9c40e64e321604d0cf" yarn.lock
```

格式：

git reset "commit ID" filepath

即reset 后跟commit的id 再跟文件路径

## ...待添加
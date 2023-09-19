---
title: 常用git命令
date: 2023/08/28
---



# 常用git命令



## 设置git用户

```shell
git config --global user.name "hai"
git config --global user.email "haizhilingyu@gmail.com"
```
## 变基拉取

```shell
git pull --rebase
```

## 全局设置pull/push自动变基拉取

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

## 仓库操作

- `git init`：初始化一个新的Git仓库
- `git clone <repository>`：克隆（下载）一个远程仓库到本地
- `git remote add <name> <url>`：添加一个远程仓库
- `git remote remove <name>`：移除一个远程仓库
- `git remote -v`：显示所有远程仓库的详细信息

## 分支操作

- `git branch`：显示所有本地分支
- `git branch <branch-name>`：创建一个新分支
- `git checkout <branch-name>`：切换到指定分支
- `git checkout -b <branch-name>`：创建并切换到新分支
- `git merge <branch-name>`：合并指定分支到当前分支
- `git branch -d <branch-name>`：删除指定分支

## 提交和修改

- `git status`：显示工作区状态
- `git add <file>`：将文件添加到暂存区
- `git add .`：将所有变更文件添加到暂存区
- `git commit -m <message>`：提交暂存区的文件到本地仓库
- `git commit -a -m <message>`：跳过暂存区，直接提交所有已跟踪的文件
- `git push <remote> <branch>`：将本地分支推送到远程仓库
- `git pull <remote> <branch>`：从远程仓库拉取并合并更新到本地分支

## 版本控制

- `git log`：显示提交日志
- `git diff`：显示工作区与暂存区的差异
- `git diff --cached`：显示暂存区与最新提交的差异
- `git checkout -- <file>`：撤销对文件的修改（恢复到最新提交的状态）

## 标签操作

- `git tag`：显示所有标签
- `git tag <tag-name>`：创建一个新标签
- `git tag -a <tag-name> -m <message>`：创建一个带注释的新标签
- `git push --tags`：推送所有标签到远程仓库
- `git push <remote> <tag-name>`：推送指定标签到远程仓库

这只是一些常见的Git命令示例列表，还有很多其他命令可供使用。可以使用`git help`命令来查看每个命令的详细说明和用法。



## ...待添加
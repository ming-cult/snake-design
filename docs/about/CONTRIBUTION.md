# Contributing Guide

## 贡献流程

* 首先 fork `front-swordsman/snake-design` 到自己的项目;
* 接着 clone 自己项目下的 `snake-design` 到本地;
* 然后在本地项目中执行以下 git 操作;

```
# 列出远程仓库 URL
$ git remote -v
# 设置一个新的远程仓库
$ git remote add remote https://github.com/front-swordsman/snake-design.git

# 再次列出远程仓库 URL
$ git remote -v
# origin	https://github.com/MuYunyun/snake-design.git (fetch)
# origin	https://github.com/MuYunyun/snake-design.git (push)
# remote	https://github.com/front-swordsman/snake-design.git (fetch)
# remote	https://github.com/front-swordsman/snake-design.git (push)

# 获取上游代码
$ git fetch remote

# 检查你的 fork’s 本地 master 分支，如果不在 master 分支就切换到该分支
$ git checkout master
# Switched to branch 'master'

# 合并来自 remote/master 的更改到本地 master 分支上。
$ git merge remote/master
```

### 提交之后：

提交合并到 `front-swordsman/snake-design` 之后，为了保证与主仓库代码的一致性，还需要进行一次本地与远程仓库的手动更新。

## Pull Request 规范

* 不要提交 `dist` 或 `build` 文件夹下的文件

* 执行 `npm run build` 后可以正确打包文件。

* 如果是修复 bug，请在 PR 中给出描述信息。

## 如何开发新组建

采用 TDD 的形式进行开发。形式如下:

1. pull request 设计的接口和测试用例给 [https://github.com/orgs/ming-cult/people](https://github.com/orgs/ming-cult/people) 中至少两人;
2. 在步骤一通过以后 pull request 具体代码的实现给 [https://github.com/orgs/ming-cult/people](https://github.com/orgs/ming-cult/people) 中至少两人;

请参考 `README` 文件

## 代码规范


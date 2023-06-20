# git常用命令

包括创建、更新、提交、合并、删除分支，查看分支差异，版本回退，清除无效分支及迁移项目
新增：git diff ^M与无效修改的消除、git删除远程commit
## 创建分支
```
1.创建本地分支 git checkout -b [ branch-name ]
2.创建远程分支 git push origin [ branch-name ]
3.关联分支 git branch --set-upstream-to=origin/[ branch-name ]
```
## 更新分支
` git pull `
## 提交分支
` git commit -m 'commit-note' `
## 提交忽略pre-commit验证
` git commit -m 'commit-note'  --no-verify`
## 合并分支
` git merge [ branch-name ] `
## 合并其他分支commit
`git cherry-pick [commit-id]`
## 删除本地分支
` git branch -d [ branch-name ] `
## 删除远程分支 
` git push origin -d [ branch-name ] `
## 查看当前状态 
` git status `
## 查看某个commit的修改内容
` git log `
## 查看commit记录
` git log [ file or src ] `
## 查看某个文件的commit记录
` git show [ commit-id ] `
## 查看某个commit的修改文件列表
` git show [ commit-id ] --name-only `
## 查看某个文件的修改历史
` git log --pretty=oneline [ file or src ] `
## 查看两个分支的commit差异
` git log [branch-name] ^[branch-name] --author=[author-name]`
## 对比两个分支的内容差异
` git diff [ branch-name ] [ branch-name ] [ file or src ] `
## 对比两个分支的文件差异
` git diff [ branch-name ] [ branch-name ] [ file or src ]  --name-only`
## 对比当前分支与其他分支的差异
` git diff [ branch-name ] `
## 回退到上一个版本
` git reset --hard HEAD^ `
## 回退到n次commit之前
` git reset --hard HEAD~n `
## 回退到指定的commit
` git reset --hard [ commit-id ] `
## 撤销本地commit
`git reset --soft HEAD^`
## 清除无效远程分支
1.查看分支对应关系
` git remote show origin `
2.删除无效分支
` git remote prune origin `
## 项目迁移
1.先将项目裸版本库clone到本地
` git clone --bare [ old-git-address ] `
2.推送到新项目地址
` git push --mirror [ new-git-address ] `
## git diff ^M与无效修改的消除
```
git diff --ignore-space-at-eol > ~test.diff
git checkout .
git apply --ignore-whitespace \~test.diff 
```
## git删除远程commit
```
git log // 查看回退到的[commit-id]
git reset --hard [commit-id] // 切换到回退到的[commit-id]
git push origin HEAD:[branch] --force // 推送对应分支到远程
```
## git 合并分支的修改内容但不合并commit
` git merge --squash [branch-name] `
## 删除历史所有提交记录的方法
```
尝试 运行 git checkout --orphan latest_branch
添加所有文件git add -A
提交更改 git commit -am "commit message"
删除分支 git branch -D master
将当前分支重命名 git branch -m master
最后，强制更新存储库 git push -f origin master
```
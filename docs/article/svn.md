# SVN常用命令
## 1. 拉取项目到本地
` svn checkout path `
## 2.  更新代码
` svn update | up `
## 3. 查看状态
` svn status `
## 4. 添加文件
` svn add file `
## 5. 添加文件 ( 递归目录下所有文件 )
` svn add . --force --no-ignore `
## 6. 撤销本地修改
` svn revert file `
## 7. 提交文件
` svn commit -m 'commit-note' `
## 8. 显示最新的几行提交
`svn log | head -n 10`
## 9. 查看提交内容
`svn log -r [commit-id] -v`
## 10. 回滚已commit内容
```
svn up // 更新最新内容
svn log // 查看最新版本及要回滚的版本
svn merge -r 6:3 [src|file_src] // 回滚指定目录或文件，从版本6到版本3
svn diff // 确认回滚结果
svn commit -m 'revert version from r6 to r3' // 提交回滚
```
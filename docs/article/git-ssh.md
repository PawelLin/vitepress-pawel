# git生成SSH公钥
## 1.安装成功后设置用户和邮箱
` git config --global user.name "name"  `
` git config --global user.email "email"  `
## 2.生成SSH Key
`ssh-keygen -t rsa -C 'email'` 
( 运行后连按三次enter，日志会打印生成的目录，即Created directory )
## 3.添加密钥
进入生成目录复制id_rsa.pub文件的内容添加到项目管理的密钥库中

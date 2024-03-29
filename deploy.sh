#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
rm -rf docs/.vitepress/dist
npm run docs:build

# 进入构建文件夹
cd docs/.vitepress/dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git checkout -b master
git add -A
git commit -m 'master'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages
git push -f git@github.com:pawellin/vitepress-pawel.git master:gh-pages

cd -

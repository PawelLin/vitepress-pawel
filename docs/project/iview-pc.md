# iview-pc

## 简介
iview-pc是基于Vue2，参考iView admin抽取的一套pc管理模板。
[在线访问](https://iview-pc.vercel.app/)

## 功能

- 登录/登出
- 组件
    - 文件上传
    - 只针对label的筛选下拉框
- 固定功能
    - 用户管理
    - 角色管理
- 表格扩展
    - 条件过滤
    - 一列占多行
    - 固定列&固定行
    - 一行占多列
- 错误页面
    - 403页面
    - 404页面
    - 500页面
- 高级路由
    - 动态路由
    - 带参页面
- 收缩侧边栏
- tag标签导航

## 文件结构
```shell
.
├── mock  模拟数据
├── plugins  webpack扩展插件
├── public  打包所需静态资源
└── src
    └── assets  项目静态资源
        ├── icons  自定义图标资源
        └── images  图片资源
    ├── components  通用公共组件
        ├── demo  自定义模块使用展示
        ├── error  错误页面
        ├── input  表单扩展
        ├── main  公共页面
        └── upload  文件上传
    ├── directive  自定义指令
        ├── clickoutside 节点以外点击
        ├── draggable 拖拽
        ├── maxheight 设置最大高度
        ├── money Input金额输入
        ├── number Input数字输入
        ├── thousands Input千分位输入
        └── thousands Input千分位自动格式输入
    ├── libs  封装工具函数
        ├── rsa  加解密
        ├── axios  http封装
        ├── enums  枚举值
        ├── filters  过滤器
        ├── mixins  全局混合
        ├── service  公共api
        ├── tools  工具函数
        ├── utils  功能方法
        └── validate  验证方法
    ├── router  路由配置 (可配置iframe)
    ├── store  Vuex配置
    └── view  页面文件
        ├── login  登录页面
        └── system  系统模块
```

## Links

- [iView](https://github.com/iview/iview)
- [Vue](https://github.com/vuejs/vue)
- [Webpack](https://github.com/webpack/webpack)


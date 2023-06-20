export default {
    title: 'Pawel',
    base: '/vitepress-pawel',
    description: 'Just playing around.',
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide' },
            {
                text: 'Dropdown Menu',
                items: [
                    { text: 'Item A', link: '/item-1' },
                    { text: 'Item B', link: '/item-2' },
                    { text: 'Item C', link: '/item-3' }
                ]
            }
        ],
        sidebar: [
            {
                text: 'project',
                collapsible: true,
                items: [
                    { text: 'summary', link: '/project/summary' },
                    { text: 'iview-pc', link: '/project/iview-pc' },
                    { text: 'admin-vite-antdesign', link: '/project/admin-vite-antdesign' },
                ]
            },
            {
                text: '常用',
                collapsible: true,
                items: [
                    { text: '常用方法', link: '/common/function' }
                ]
            },
            {
                text: '学习',
                collapsible: true,
                items: [
                    { text: 'React', link: '/learn/react' },
                    { text: 'Javascript', link: '/learn/javascript' }
                ]
            },
            {
                text: '组件',
                collapsible: true,
                items: [
                    { text: 'Input输入框', link: '/component/input' }
                ]
            },
            {
                text: '书籍',
                collapsible: true,
                items: [
                    { text: '你不知道的Javascript(上卷)', link: '/book/you-dont-know-JS-one' }
                ]
            },
            {
                text: '文章',
                collapsible: true,
                items: [
                    { text: 'git常用命令', link: '/article/git' },
                    { text: 'SVN常用命令', link: '/article/svn' },
                    { text: 'git生成SSH公钥', link: '/article/git-ssh' },
                    { text: '常用的Javascript方法封装', link: '/article/js-funcs' },
                    { text: '用CSS的Grid布局画飞行棋盘', link: '/article/fight-chess' },
                    { text: 'Date', link: '/article/date' },
                    { text: '一些HTML', link: '/article/some-html' },
                    { text: '一些CSS', link: '/article/some-css' },
                    { text: '一些正则', link: '/article/some-regular' },
                    { text: 'Input输入限制及格式化', link: '/article/input-limit' },
                ]
            },
            {
                text: '其他',
                collapsible: true,
                items: [
                    { text: 'css兼容', link: '/other/css' }
                ]
            }
        ]
    }
}
export default {
    title: 'VitePress1',
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
            }
        ]
    }
}
import Main from '../components/main/main.vue'
import Content from '../components/content'


export default [
    {
        path: '/',
        name: 'home',
        component: Main,
        meta: {
            notCache: true
        },
        children: []
    },
    {
        path: '/components',
        name: 'components',
        component: Content,
        redirect:'/components/Button',
        children: [
            {
                path: '/components/Button',
                name: 'Button',
                meta: {
                    name: '按钮',
                    type: 'component'
                },
                component: (resolve) => require(['../view/components/Button/index.md'], resolve)
            },
            {
                path: '/components/Input',
                name: 'Input',
                meta: {
                    name: '输入框',
                    type: 'component'
                },
                component: (resolve) => require(['../view/components/Input/index.md'], resolve)
            },
            {
                path: '/components/Tabs',
                name: 'Tabs',
                meta: {
                    name: '标签页',
                    type: 'component'
                },
                component: (resolve) => require(['../view/components/tabs/index.md'], resolve)
            },
            {
                path: '/components/Popover',
                name: 'Popover',
                meta: {
                    name: '气泡',
                    type: 'component'
                },
                component: (resolve) => require(['../view/components/Popover/index.md'], resolve)
            },
            {
                path: '/components/Table',
                name: 'Table',
                meta: {
                    name: '表格',
                    type: 'component'
                },
                component: (resolve) => require(['../view/components/Table/index.md'], resolve)
            },
            {
                path: '/components/Upload',
                name: 'Upload',
                meta: {
                    name: '上传组件',
                    type: 'component'
                },
                component: (resolve) => require(['../view/components/Upload/index.md'], resolve)
            },
            {
                path: '/components/Progress',
                name: 'Progress',
                meta: {
                    name: '进度条',
                    type: 'component'
                },
                component: (resolve) => require(['../view/components/Progress/index.md'], resolve)
            }
        ]
    },
    {
        path: '/500',
        name: 'error_500',
        meta: {
            hideInMenu: true
        },
        component: () => import('../view/error-page/500.vue')
    },
    {
        path: '*',
        name: 'error_404',
        meta: {
            hideInMenu: true
        },
        component: () => import('../view/error-page/404.vue')
    }
]

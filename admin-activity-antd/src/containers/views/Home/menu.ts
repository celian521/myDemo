import Loadable from 'react-loadable'

import PageLoading from '@components/PageLoading'

const loadComponent = (loader: () => Promise<any>) => Loadable({ loader, loading: PageLoading })

export const asynchronousComponents = {
    SocketDebugger: loadComponent(() => import(/* webpackChunkName: "socket-debugger" */ '@views/SocketDebugger')),
    Users: loadComponent(() => import(/* webpackChunkName: "users" */ '@views/Users')),
    ActivityList: loadComponent(() => import(/* webpackChunkName: "users" */ '@views/Activity/List')),
    ActivityEdit: loadComponent(() => import(/* webpackChunkName: "users" */ '@views/Activity/Edit'))
}

// all routers key
export type AsynchronousComponentKeys = keyof typeof asynchronousComponents

export interface IMenu {
    title: string
    id: number
    pid?: number
    path?: string
    icon?: string
    component?: AsynchronousComponentKeys
    exact?: boolean
}

export interface IMenuInTree extends IMenu {
    children?: IMenuInTree[],
    // 内部路由，不展示在菜单
    insideChildren?: IMenuInTree[]
}

export const menu: IMenuInTree[] = [
    {
        id: 1,
        path: '/',
        title: '活动管理',
        icon: 'gift',
        component: 'ActivityList',
        exact: true,
        insideChildren: [{
            id: 101,
            path: '/activity/edit/:action/:id?',
            title: '创建活动',
            component: 'ActivityEdit',
            exact: true
        }]
    },
    {
        id: 99,
        path: '/users',
        title: '用户管理',
        icon: 'user',
        component: 'Users',
        exact: true
    },
    {
        id: 999,
        path: '/socketDebugger',
        title: 'Socket调试',
        icon: 'coffee',
        component: 'SocketDebugger',
        exact: true
    }
]

export default menu

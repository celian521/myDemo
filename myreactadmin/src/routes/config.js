// 路由页面配置
import Loadable from 'react-loadable'; // 实现按需加载
import DelayLoading from '@/components/common/delayLoading'

const loadComponent = (loader) => Loadable({
  loader,
  loading: DelayLoading,
  delay:3000
})


const Layout = loadComponent(() => import('@/pages/layout'));

// const Layout = Loadable({ loader: () => import('@/pages/layout'), loading: DelayLoading, delay:3000 });
const Home = Loadable({ loader: () => import('@/pages/home'), loading: DelayLoading, delay:3000 });
const Iframe = Loadable({ loader: () => import('@/pages/iframe'), loading: DelayLoading, delay:3000 });
const User = Loadable({ loader: () => import('@/pages/user'), loading: DelayLoading, delay:3000 });
const UserList = Loadable({ loader: () => import('@/pages/user/UserList'), loading: DelayLoading, delay:3000 });
const UserEdit = Loadable({ loader: () => import('@/pages/user/UserEdit'), loading: DelayLoading, delay:3000 });
const UserAdd = Loadable({ loader: () => import('@/pages/user/UserAdd'), loading: DelayLoading, delay:3000 });
const Settings = Loadable({ loader: () => import('@/pages/settings'), loading: DelayLoading, delay:3000 });
const List = Loadable({ loader: () => import('@/pages/list'), loading: DelayLoading, delay:3000 });

/*嵌套路由*/
let routes = [{
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/app",
    component: Iframe
  },
  {
    path: "/settings",
    component: Settings
  },
  {
    path: "/list",
    component: List
  },
  {
    path: "/user",
    component: User,
    routes: [ /*嵌套路由*/ {
        path: "/user/list",
        component: UserList,
        exact: true
      },
      {
        path: "/user/add",
        component: UserAdd
      },
      {
        path: "/user/edit",
        component: UserEdit
      }
    ]
  }
];

export default [{
  path: "/",
  component: Layout,
  routes
}]
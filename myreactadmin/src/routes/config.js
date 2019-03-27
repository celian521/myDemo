// 路由页面配置
import { asyncComponent } from "./asyncComponent"; // 实现按需加载

const Layout = asyncComponent(() => import("../pages/layout"));
const Login = asyncComponent(() => import("../pages/login"));
const Iframe = asyncComponent(() => import("../pages/iframe"));
const User = asyncComponent(() => import("../pages/user"));
const UserList = asyncComponent(() => import("../pages/user/UserList"));
const UserEdit = asyncComponent(() => import("../pages/user/UserEdit"));
const UserAdd = asyncComponent(() => import("../pages/user/UserAdd"));
const Settings = asyncComponent(() => import("../pages/settings"));
const test = asyncComponent(() => import("../pages/test"));

let routes = [
    {
      path: "/",
      component: Layout,
      exact:true
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/home",
      component: Layout,
      routes:[   /*嵌套路由*/
        {
          path: "/home/",
          component: UserEdit,
          exact:true
        },
        {
          path: "/home/app",
          component: Iframe
        },
        {
          path: "/home/settings",
          component: Settings
        },
        {
          path: "/home/test",
          component: test
        },
        {
          path: "/home/user",
          component: User,
          routes:[   /*嵌套路由*/
            {
              path: "/home/user/list",
              component: UserList
            },
            {
              path: "/home/user/add",
              component: UserAdd
            },
            {
              path: "/home/user/edit",
              component: UserEdit
            }
          ]
        }
      ]
    }
];

export default routes;
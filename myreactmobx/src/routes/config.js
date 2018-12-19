
// import Home from '../components/Home';
// import User from '../components/User';
// import UserList from '../components/User/UserList';
// import UserAdd from '../components/User/UserAdd';
// import UserEdit from '../components/User/UserEdit';
// import Shop from '../components/Shop';
// import News from '../components/News';

// import Layout from './pages'
import Home from '../pages/home/index2.js';
import Detail from '../pages/detail';
import MobxDemo from '../pages/mobxDemo';
import FormDemo from '../pages/detail/form';
import Higher from '../pages/higherOrderComponent';

let routes = [
    {
      path: "/",
      component: Home,
      exact:true
    },
    {
      path: "/detail",
      component: Detail
    },
    {
      path: "/higher",
      component: Higher
    },
    // {
    //   path: "/user",
    //   component: User,
    //   routes:[   /*嵌套路由*/
    //     {
    //       path: "/user/",
    //       component: UserList
    //     },
    //     {
    //       path: "/user/add",
    //       component: UserAdd
    //     },
    //     {
    //       path: "/user/edit",
    //       component: UserEdit
    //     }
    //   ]
    // },
    // {
    //   path: "/mobx",
    //   component: MobxDemo
    // },
    {
      path: "/form",
      component: FormDemo
    }
];

export default routes;
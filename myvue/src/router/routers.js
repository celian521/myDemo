const home = () => import('@/pages/home');
const list = () => import('@/pages/list');
const event = () => import('@/pages/event');

const routers = [
  // 首页 HOME
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页'
    },
    component: home
  },
  // 列表
  {
    name: 'list',
    path: '/',
    meta: {
      title: '列表'
    },
    component: list
  },
  // event
  {
    name: 'event',
    path: '/event',
    meta: {
      title: 'event'
    },
    component: event
  },
  // 404
  {
    path: '*',
    redirect: '/'
  }
]

export default routers

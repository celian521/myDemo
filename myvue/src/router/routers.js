const home = () => import('@/pages/home');

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
  // 404
  {
    path: '*',
    redirect: '/'
  }
]

export default routers

import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/mobx'
import Index from './pages/home/index'
import store from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/home/index',
      'pages/member/index',
      'pages/shoppingCard/index',
      'pages/list/index',
      'pages/goods/index',
      'pages/search/index',
      'pages/login/index',
      'pages/login/loginPhone',
      'pages/webview/index',

      'pages/demo/index',
      'pages/demo/pay',
      'pages/demo/list',
      'pages/demo/search',
      'pages/demo/map',

    ],
    window: {
      backgroundColor: "#fff",
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '商圈小程序',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "./assets/images/tab-bar/home.png",
        selectedIconPath: "./assets/images/tab-bar/home-active.png"
      },
      // {
      //   pagePath: "pages/demo/index",
      //   text: "DEMO",
      //   iconPath: "./assets/images/tab-bar/cate.png",
      //   selectedIconPath: "./assets/images/tab-bar/cate-active.png"
      // },{
      //   pagePath: "pages/login/index",
      //   text: "购物车",
      //   iconPath: "./assets/images/tab-bar/cart.png",
      //   selectedIconPath: "./assets/images/tab-bar/cart-active.png"
      // },
      {
        pagePath: "pages/member/index",
        text: "我的",
        iconPath: "./assets/images/tab-bar/user.png",
        selectedIconPath: "./assets/images/tab-bar/user-active.png"
      }],
      color: '#a6a6a6',
      selectedColor: '#DC5A58',
      backgroundColor: '#fff',
      borderStyle: 'black'
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

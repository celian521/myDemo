import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
  require('nerv-devtools')
}

const store = {
  counterStore
}

class App extends Component {

  config = {
    pages: [
      'pages/home/index',
      'pages/uikit/index',
      'pages/user/index',
      'pages/demo/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '旗袍协会',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "./assets/images/home.png",
        selectedIconPath: "./assets/images/home-active.png"
      },{
        pagePath: "pages/uikit/index",
        text: "企业家俱乐部",
        iconPath: "./assets/images/cart.png",
        selectedIconPath: "./assets/images/cart-active.png"
      },{
        pagePath: "pages/demo/index",
        text: "活动策划",
        iconPath: "./assets/images/cart.png",
        selectedIconPath: "./assets/images/cart-active.png"
      },{
        pagePath: "pages/user/index",
        text: "会员中心",
        iconPath: "./assets/images/user.png",
        selectedIconPath: "./assets/images/user-active.png"
      }],
      color: '#666',
      selectedColor: '#000',
      backgroundColor: '#fff',
      borderStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

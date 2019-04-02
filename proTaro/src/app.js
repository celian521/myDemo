import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'
import store from './store'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
  require('nerv-devtools')
}

class App extends Component {

  config = {
    pages: [
      'pages/home/index',
      'pages/login/index',
      'pages/club/index',
      'pages/plan/index',
      'pages/user/index',
      'pages/details/index',
      'pages/organ/index',
      'pages/training/index',
      'pages/media/index',
      'pages/dangjian/index',
      'pages/demo/index',
      'pages/demo/scroll/index'
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
        iconPath: "./assets/images/tab-bar/home.png",
        selectedIconPath: "./assets/images/tab-bar/home-active.png"
      },{
        pagePath: "pages/club/index",
        text: "企业家俱乐部",
        iconPath: "./assets/images/tab-bar/club.png",
        selectedIconPath: "./assets/images/tab-bar/club-active.png"
      },{
        pagePath: "pages/plan/index",
        text: "活动策划",
        iconPath: "./assets/images/tab-bar/plan.png",
        selectedIconPath: "./assets/images/tab-bar/plan-active.png"
      },{
        pagePath: "pages/user/index",
        text: "会员中心",
        iconPath: "./assets/images/tab-bar/user.png",
        selectedIconPath: "./assets/images/tab-bar/user-active.png"
      }],
      color: '#a6a6a6',
      selectedColor: '#855498',
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

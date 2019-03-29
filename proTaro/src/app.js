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
      'pages/club/index',
      'pages/plan/index',
      'pages/user/index',
      'pages/details/index',
      'pages/uikit/index',
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
        pagePath: "pages/club/index",
        text: "企业家俱乐部",
        iconPath: "./assets/images/club.png",
        selectedIconPath: "./assets/images/club-active.png"
      },{
        pagePath: "pages/plan/index",
        text: "活动策划",
        iconPath: "./assets/images/plan.png",
        selectedIconPath: "./assets/images/plan-active.png"
      },{
        pagePath: "pages/user/index",
        text: "会员中心",
        iconPath: "./assets/images/user.png",
        selectedIconPath: "./assets/images/user-active.png"
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

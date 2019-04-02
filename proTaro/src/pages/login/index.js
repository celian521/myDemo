import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'

import './index.scss'

@inject('apisStore')
@observer
class Login extends Component {
  constructor() {
    super(...arguments);
  }
  config = {
    navigationBarTitleText: '旗袍文化促进会'
  }
  componentDidMount() {
    const { apisStore } = this.props
    Taro.login({
      success(res) {
        if (res.code) apisStore.login(res.code)
      }
    })
  }
  render() {
    return (
      <AtActivityIndicator mode='center' content='加载中...'></AtActivityIndicator>
    )
  }
}

export default Login

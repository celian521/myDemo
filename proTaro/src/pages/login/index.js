import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'

import apis from '@apis'

import './index.scss'

@inject('globalStore')
@observer
class Login extends Component {
  constructor() {
    super(...arguments);
  }
  config = {
    navigationBarTitleText: '旗袍文化促进会'
  }
  componentDidMount() {
    const { globalStore } = this.props
    Taro.login({
      success(res) {
        if (res.code) {
          apis.getSession({code: res.code}).then(({data})=>{
            globalStore.login(data.session_id)
          })
        }
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

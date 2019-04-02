import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'

import './index.scss'

@inject('apisStore')
@observer
class Login extends Component {
  constructor() {
    super(...arguments);
  }
  config = {
    navigationBarTitleText: 'loading...'
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
      <View className='wrap'>
        loading...
      </View>
    )
  }
}

export default Login

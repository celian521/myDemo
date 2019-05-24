import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import { View, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import picLogin from '@/assets/images/login.png'
import linkTo from '@/utils/linkTo.js'
import './index.scss'

@inject('globalStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '授权登录'
  }
  login() {
    const { globalStore } = this.props
    globalStore.login()
  }

  onGotUserInfo = e => {
    console.log('onGotUserInfo=>', e)
  }

  render() {

    return (
      <View className='wrap'>
        <View className='welcome' onClick={this.login}>
          <Image className='we-logo' src={picLogin} />
        </View>
        <View className='login-btn'>
          <AtButton type='secondary' onClick={() => { linkTo({ url: '/pages/login/loginPhone' }) }}>手机号登录 / 注册</AtButton>
          <AtButton type='primary' open-type='getUserInfo' lang='zh_CN' onGetUserInfo={this.onGotUserInfo}>微信用户快捷登录</AtButton>
        </View>
      </View>
    )
  }
}

export default Index

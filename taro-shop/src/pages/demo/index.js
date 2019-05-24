import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import { View } from '@tarojs/components'
import { AtDivider, AtButton, AtIcon, AtList, AtListItem } from 'taro-ui'
// import { } from '@/components'

import linkTo from '@/utils/linkTo.js'

import './index.scss'

@inject()
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '商圈小程序',
    enablePullDownRefresh: true
  }

  onPullDownRefresh() {
    Taro.stopPullDownRefresh()
  }

  componentWillMount() {
    // console.log('Taro.ENV_TYPE', Taro.ENV_TYPE, Taro.getEnv(), process.env.NODE_ENV, process.env.TARO_ENV)
  }

  getPhoneNumber = (e) => {
    console.log('getPhoneNumber=>', e)
  }

  onGotUserInfo = e => {
    console.log('onGotUserInfo=>', e)
  }

  onOpenSetting = e => {
    console.log('onOpenSetting=>', e)
  }

  onContact = e => {
    console.log('onContact=>', e)
  }

  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/pages/member/index',
      imageUrl: 'https://dummyimage.com/150x150/eee/999'
    }
  }

  render() {
    return (
      <View>

        <AtDivider content='商圈小程序 DEMO导航' />
        <AtList>
          <AtListItem title='webview' arrow='right' onClick={() => { linkTo({ url: 'http://10.0.3.5:5000/', title:'webtitle' }) }} />
          <AtListItem title='jssdk' arrow='right' onClick={() => { linkTo({ url: 'https://www.weixinsxy.com/jssdk/', title:'jssdk' }) }} />
          <AtListItem title='登录' arrow='right' onClick={() => { linkTo({ url: '/pages/login/index' }) }} />
          <AtListItem title='首页' arrow='right' onClick={() => { linkTo({ url: '/pages/index/index' }) }} />
          <AtListItem title='会员中心' arrow='right' onClick={() => { linkTo({ url: '/pages/member/index' }) }} />
          <AtListItem title='DEMO search' arrow='right' onClick={() => { linkTo({ url: '/pages/demo/search' }) }} />
          <AtListItem title='DEMO pay' arrow='right' onClick={() => { linkTo({ url: '/pages/demo/pay' }) }} />
          <AtListItem title='DEMO list' arrow='right' onClick={() => { linkTo({ url: '/pages/demo/list' }) }} />
          <AtListItem title='DEMO map' arrow='right' onClick={() => { linkTo({ url: '/pages/demo/map' }) }} />
        </AtList>

        <View className='wrap'>
          <AtDivider content='接口测试' />
          <AtButton type='secondary' open-type='share'>share</AtButton>
          <AtButton type='secondary' open-type='getPhoneNumber' onGetPhoneNumber={this.getPhoneNumber}>获取用户手机号</AtButton>
          <AtButton type='secondary' open-type='contact' onContact={this.onContact}>进入客服会话</AtButton>
          <AtButton type='secondary' open-type='openSetting' onOpenSetting={this.onOpenSetting}>打开授权设置页</AtButton>
          <AtDivider>
            <AtIcon value='analytics'></AtIcon>
          </AtDivider>
        </View>

      </View>
    )
  }
}

export default Index

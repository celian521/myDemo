import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, Button } from '@tarojs/components'
import { AtAvatar, AtButton, AtCountdown, AtList, AtListItem, AtModal, AtModalContent, AtModalAction } from 'taro-ui'
import apis from '@/apis'
import linkTo from '@/utils/linkTo.js'

import './index.scss'

@inject('globalStore')
@observer
class Member extends Component {
  config = {
    backgroundColorTop: "#3E3E3E",
    backgroundColorBottom: "#fff",
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#3E3E3E',
    navigationBarTitleText: '会员中心',
    navigationBarTextStyle: "white",
    enablePullDownRefresh: true,
  }
  constructor() {
    super(...arguments);
    this.state = {
    }
  }
  onPullDownRefresh() {
    Taro.stopPullDownRefresh()
  }

  componentWillMount() {
    const { globalStore } = this.props
    globalStore.getUserInfo()
  }

  render() {
    const { globalStore } = this.props
    const { nickName, avatarUrl } = globalStore.userInfo
    return (
      <View>
        <View className='at-row at-row__align--center' >
          <View className='at-col at-col-2'>
            <AtAvatar circle image={avatarUrl} />
          </View>
          <View className='at-col at-col-8'>
            <View>{ nickName }</View>
          </View>
        </View>

        <View className='at-row at-row__align--center' style={{textAlign:'center'}}>
          <View className='at-col'>
            <View className='icon icon-share'></View>
            <View>标题</View>
          </View>
          <View className='at-col'>
            <View className='icon icon-share'></View>
            <View>标题</View>
          </View>
          <View className='at-col'>
            <View className='icon icon-share'></View>
            <View>标题</View>
          </View>
          <View className='at-col'>
            <View className='icon icon-share'></View>
            <View>标题</View>
          </View>
        </View>

        <AtList>
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' extraText='详细信息' arrow='right' />
          <AtListItem title='禁用状态' disabled extraText='详细信息' arrow='right' />
          <AtListItem title='DEMO' arrow='right' onClick={() => { linkTo({ url: '/pages/demo/index' }) }} />
        </AtList>

      </View>
    )
  }
}

export default Member

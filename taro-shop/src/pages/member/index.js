import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, Button } from '@tarojs/components'
import { AtAvatar, AtButton, AtCountdown, AtList, AtListItem, AtModal, AtModalContent, AtModalAction } from 'taro-ui'
import apis from '@apis'
import linkTo from '@utils/linkTo.js'
import picWork from '@assets/images/work.svg'
import picShare from '@assets/images/share.svg'

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

  }

  render() {
    const { globalStore } = this.props
    const { nickName, avatarUrl } = globalStore.userInfo
    return (
      <View>
        <View className='myCard'>
          <View className='at-row at-row__align--center' style={{ color: '#5F471A;' }} onClick={this.handleLoginOut} >
            <View className='at-col at-col-2'><AtAvatar circle image={avatarUrl} /></View>
            <View className='at-col at-col-8'>
              <View className='mc-nikcName'>{ nickName }</View>
              <View className='mc-info'>2019-10-02到期</View>
            </View>
          </View>
          <View className='mc-bottom'>
            <View className='mc-title'>咪哒音乐卡 </View>
            <View className='mc-info'>今日剩余:
            {/* 时长 */ }
              <AtCountdown
                minutes={100000}
              />
            </View>
          </View>
        </View>
        <AtList hasBorder={false}>
          <AtListItem
            title='我的作品'
            arrow='right'
            onClick={() => { linkTo({ url: 'http://10.0.3.127:9001/#/pages/index/index?project=5c529055b403b9a8a690d12d&id=5c76633240bfbbd260d403f1', title: '我的作品' }) }}
          />
        </AtList>
        <AtButton open-type='share'>邀请好友</AtButton>

      </View>
    )
  }
}

export default Member

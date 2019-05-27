import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, Text, Button } from '@tarojs/components'
import { AtAvatar, AtButton, AtCountdown, AtList, AtListItem, AtModal, AtModalContent, AtModalAction } from 'taro-ui'
import apis from '@/apis'
import linkTo from '@/utils/linkTo.js'

import './index.scss'

@inject('globalStore')
@observer
class Member extends Component {
  config = {
    backgroundColorTop: "#302F2E",
    backgroundColorBottom: "#f7f7f7",
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#302F2E',
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

        <View className='user'>

          <View className='myUser at-row at-row__align--center' >
            <View className='at-col at-col-2'>
              <AtAvatar circle image={avatarUrl} />
            </View>
            <View className='at-col at-col-9'>
              <View className='nickName'>{ nickName }</View>
            </View>
            <View className='at-col at-col-1'>
              <View style={{ textAlign: "right" }}> <Text className='at-icon at-icon-chevron-right'></Text> </View>
            </View>
          </View>

          <View className='myVip'>

            <View className='at-row at-row__justify--between at-row__align--center'>
              <View className='at-col'>
                <View>v+ 会员</View>
                <View>2020.0909到期</View>
              </View>
              <View className='at-col' style={{ textAlign: 'right' }}>
                <View className='at-icon at-icon-camera'></View>
              </View>
            </View>


          </View>
        </View>


        <View className='myCount'>
          <View className='at-row at-row__justify--center at-row__align--center'>
            <View className='at-col at-col-3'>
              <View className='num'>999</View>
              <View>我的积分</View>
            </View>
            <View className='at-col at-col-3'>
              <View className='num'>5</View>
              <View>优惠券</View>
            </View>
          </View>
        </View>

        <View className='order'>
          <View className='at-row at-row__align--center'>
            <View className='at-col'>
              <View className='at-icon at-icon-shopping-bag'></View>
              <View>待付款</View>
            </View>
            <View className='at-col'>
              <View className='at-icon at-icon-shopping-bag'></View>
              <View>待消费</View>
            </View>
            <View className='at-col'>
              <View className='at-icon at-icon-shopping-bag'></View>
              <View>退款/售后</View>
            </View>
            <View className='at-col myOrder'>
              <View className='at-icon at-icon-shopping-bag'></View>
              <View>我的订单</View>
            </View>
          </View>
        </View>

        <View className='toolLIST'>
          <AtList className='atList' hasBorder={false}>
            <AtListItem
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
              title='购物车'
              arrow='right'
            />
            <AtListItem
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
              title='我的活动'
              extraText='2'
              arrow='right'
            />
            <AtListItem
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
              title='我的关注'
              arrow='right'
            />
            <AtListItem
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
              title='意见反馈'
              arrow='right'
              onClick={() => { linkTo({ url: '/pages/demo/index' }) }}
            />
          </AtList>
        </View>
      </View>
    )
  }
}

export default Member

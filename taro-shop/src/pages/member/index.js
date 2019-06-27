import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, Text, Image } from '@tarojs/components'
import { AtAvatar, AtList, AtListItem, AtModal, AtModalHeader, AtModalContent } from 'taro-ui'
import { Barcode, QRCode } from 'taro-code'
import { mask } from 'utilscore'
// import apis from '@/apis'
import linkTo from '@/utils/linkTo.js'

import './index.scss'

@inject('globalStore', 'cartStore')
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
      QRcodeModal: false
    }
  }
  onPullDownRefresh() {
    Taro.stopPullDownRefresh()
  }

  componentWillMount() {
    const { globalStore } = this.props
    globalStore.getUserInfo()
  }

  openQRcode() {
    this.setState({
      QRcodeModal: true
    })
  }
  closeQRcode() {
    this.setState({
      QRcodeModal: false
    })
  }

  render() {
    const { globalStore, cartStore } = this.props
    const { total } = cartStore
    const { nickName, avatarUrl } = globalStore.userInfo
    return (
      <View>

        <View className='user'>

          <View className='myUser at-row at-row__align--center' onClick={() => linkTo({ url: '/pages/member/setting/index' })} >
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

            {/* <View className='at-row at-row__justify--between at-row__align--center'>
              <View className='at-col'>
                <View>开通V+会员，购物享折上折</View>
              </View>
              <View className='at-col' style={{ textAlign: 'right' }}>
                <View className='btn'>立即开通</View>
              </View>
            </View> */}

            <View className='at-row at-row__justify--between at-row__align--center'>
              <View className='at-col'>
                <View className='vip-title'><Image src='http://ptqv4ap4z.bkt.clouddn.com/icon/vip.svg' />V+会员</View>
                <View className='vip-info'>2020.0909到期</View>
              </View>
              <View className='at-col' style={{ textAlign: 'right' }} onClick={this.openQRcode}>
                <View className='icon icon-qrcode'></View>
              </View>
            </View>


            <AtModal className='qrcodeModal' closeOnClickOverlay={false} isOpened={this.state.QRcodeModal}>
              <AtModalHeader>
                <Text>永旺商场</Text>
                <Text className='at-icon at-icon-close' onClick={this.closeQRcode}></Text>
              </AtModalHeader>
              <AtModalContent>
                <View className='barcodeBox'>
                   {this.state.QRcodeModal&&<Barcode text='634345787987997' width={280} height={68} />}
                <Text>634345787987997</Text>
                </View>
               <View className='qrcodeBox'>
                 {this.state.QRcodeModal&&<QRCode text='634345787987997' size={160} />}
               </View>
              </AtModalContent>
            </AtModal>

          </View>
        </View>


        <View className='myCount'>
          <View className='at-row at-row__justify--center at-row__align--center'>
            <View className='at-col at-col-3' onClick={() => linkTo({ url: '/pages/member/integral/index' })}>
              <View className='num'><Text className='dot'>999</Text></View>
              <View>我的积分</View>
            </View>
            <View className='at-col at-col-3' onClick={() => linkTo({ url: '/pages/member/coupon/index' })}>
              <View className='num'><Text className='dot'>80</Text></View>
              <View>优惠券</View>
            </View>
          </View>
        </View>

        <View className='order'>
          <View className='at-row at-row__align--center'>
            <View className='at-col' onClick={() => linkTo({ url: '/pages/member/order/index?type=1' })}>
              <View className='icon icon-order01 dot'></View>
              <View>待付款</View>
            </View>
            <View className='at-col' onClick={() => linkTo({ url: '/pages/member/order/index?type=2' })}>
              <View className='icon icon-order02 dot'></View>
              <View>待消费</View>
            </View>
            <View className='at-col' onClick={() => linkTo({ url: '/pages/member/order/index?type=4' })}>
              <View className='icon icon-order03'></View>
              <View>退款/售后</View>
            </View>
            <View className='at-col myOrder' onClick={() => linkTo({ url: '/pages/member/order/index?type=0' })}>
              <View className='icon icon-order'></View>
              <View>我的订单</View>
            </View>
          </View>
        </View>

        <View className='toolLIST'>
          <AtList className='atList' hasBorder={false}>
            <AtListItem
              className='myCart'
              thumb='http://ptqv4ap4z.bkt.clouddn.com/icon/cart.svg'
              title='购物车'
              extraText={!!total.num ? total.num.toString() : ''}
              arrow='right'
              onClick={() => linkTo({ url: '/pages/shoppingCart/index' })}
            />
            <AtListItem
              thumb='http://ptqv4ap4z.bkt.clouddn.com/icon/gift.svg'
              title='我的活动'
              arrow='right'
              onClick={() => linkTo({ url: '/pages/member/activity/index' })}
            />
            <AtListItem
              thumb='http://ptqv4ap4z.bkt.clouddn.com/icon/collect.svg'
              title='我的关注'
              arrow='right'
              onClick={() => linkTo({ url: '/pages/member/collect/index' })}
            />
            <AtListItem
              thumb='http://ptqv4ap4z.bkt.clouddn.com/icon/writing.svg'
              title='意见反馈'
              arrow='right'
              onClick={() => linkTo({ url: '/pages/member/feedback/index' })}
            />
            <AtListItem
              thumb='http://ptqv4ap4z.bkt.clouddn.com/icon/writing.svg'
              title='DEMO'
              arrow='right'
              onClick={() => linkTo({ url: '/pages/demo/index' })}
            />
          </AtList>
        </View>
      </View>
    )
  }
}

export default Member

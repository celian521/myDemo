/**
 * 我的会员权益
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image } from '@tarojs/components'
import { AtAvatar, AtList, AtListItem, AtModal, AtModalHeader, AtModalContent } from 'taro-ui'
import ItemGood from './itemGood'
import ItemCoupon from './itemCoupon'
import linkTo from '@/utils/linkTo.js'

import './index.scss'

class Equity extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      QRcodeModal: false
    }
  }

  config = {
    backgroundColorTop: "#302F2E",
    backgroundColorBottom: "#f7f7f7",
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#302F2E',
    navigationBarTitleText: '我的',
    navigationBarTextStyle: "white",
  }

  componentWillMount() {
    Taro.hideTabBar()
  }

  openQRcode = () => {
    this.setState({
      QRcodeModal: true
    })
  }

  closeQRcode = () => {
    this.setState({
      QRcodeModal: false
    })
  }

  goMyPage = () => {
    linkTo({ url: '/pages/shop/main/index' })
  }

  render() {
    return (
      <View>
        <View className='user'>
          <View className='myVip'>
            <View className='at-row at-row__justify--between at-row__align--center'>
              <View className='at-col'>
                <View className='vip-title'><Image src='http://10.0.3.5:5000/icon/vip.svg' />V+会员</View>
                <View className='vip-info'>2020.09.09到期</View>
              </View>
              <View className='at-col' style={{ textAlign: 'right' }} onClick={this.openQRcode}>
                <View className='icon icon-qrcode'></View>
              </View>
            </View>

            <AtModal className='qrcodeModal'  isOpened={this.state.QRcodeModal}>
              <AtModalHeader>
                <Text>永旺商场</Text>
                <Text className='at-icon at-icon-close' onClick={this.closeQRcode}></Text>
              </AtModalHeader>
              <AtModalContent> QRCODE empty </AtModalContent>
            </AtModal>
          </View>
        </View>

        <View className='equity'>
          <View className='equity-title'>V+会员权益</View>
          <View className='at-row at-row__justify--between at-row__align--center'>
            <View className='at-col equity-item'>
              <image src='http://10.0.3.5:5000/equity-icon-1.png' />
              <Text className='name'>专享折扣</Text>
              <Text className='desc'>立享9.8折</Text>
            </View>
            <View className='at-col equity-item'>
              <image src='http://10.0.3.5:5000/equity-icon-2.png' />
              <Text className='name'>专享购物权益</Text>
              <Text className='desc'>爆款专享</Text>
            </View>
            <View className='at-col equity-item'>
              <image src='http://10.0.3.5:5000/equity-icon-3.png' />
              <Text className='name'>专享优惠券</Text>
              <Text className='desc'>每月专享购物券</Text>
            </View>
            <View className='at-col equity-item'>
              <image src='http://10.0.3.5:5000/equity-icon-4.png' />
              <Text className='name'>更多</Text>
              <Text className='desc'>敬请期待</Text>
            </View>
          </View>
          <Button className='equity-btn'>立即开通￥365/年</Button>
        </View>

        <View className='equity-list'>
          <View className='equity-list-title'>会员专享优惠卷</View>
          <ItemCoupon data={[1,2,3]} />
        </View>

        <View className='equity-list'>
          <View className='equity-list-title'>优选折扣商品</View>
          <ItemGood data={[1,2,3]} />
        </View>

      </View>
    )
  }
}

export default Equity

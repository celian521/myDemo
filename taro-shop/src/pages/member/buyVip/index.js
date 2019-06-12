/**
 * 开通会员
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, Image, Radio, Button } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'

import './index.scss'

@inject('globalStore')
@observer
class BuyVip extends Component {
  constructor() {
    super(...arguments)
  }

  config = {
    navigationBarTitleText: '开通会员'  
  }

  componentWillMount() {    
    const { globalStore } = this.props
    globalStore.getUserInfo()
  }

  render() {
    const { globalStore } = this.props
    const { nickName, avatarUrl } = globalStore.userInfo

    return (
      <View className='buy-vip'>
        <View className='at-row at-row__align--center' >
          <View className='at-col at-col-2'>
            <AtAvatar circle image={avatarUrl} />
          </View>
          <View className='at-col at-col-10'>
            <View className='nickName'>{ nickName }</View>
          </View>
        </View>

        <View className='vip-card'>
          <View className='at-row at-row__align--center' >
            <View className='at-col at-col-8'>
              <View className='vip-title'><Image src='http://10.0.3.5:5000/icon/vip.svg' />V+会员</View>
              <View className='vip-info'>永旺商城购物中心会员(365天）</View>
            </View>
            <View className='at-col at-col-4'>
              <View className='vip-price'>￥365/年</View>
            </View>
          </View>
        </View>

        <View className='vip-desc'>V+会员服务一经开通不支持取消/退款，敬请了解</View>

        <View className='pay-mode'>
          <Image className='wxpay-icon' src='http://10.0.3.5:5000/icon/wxpay.svg' />
          <View className='pay-mode-name'>微信支付</View>
          <Radio value='all' color='#DC5A58' checked></Radio>
        </View>

        <View className='fixed-bottom'>
          <View className='pay-info'>
            <View className='amount'>合计: ¥365/年</View>
            <Button className='pay-btn'>确认支付</Button>
          </View>
        </View>
      </View>
    )
  }
}

export default BuyVip

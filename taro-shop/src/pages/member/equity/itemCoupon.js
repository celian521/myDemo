/**
 * VIP专属优惠卷
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

// import linkTo from '@/utils/linkTo.js'

import './itemCoupon.scss'

class ItemGood extends Component {
  render() {
    const { data } = this.props
    return (
      <View className='vip-coupon'>
      { data.map(v => (
        <View key={v} className='item' onClick={this.handerLink.bind(this, 3)}>
          {/* <View className='tag'>神卷</View> */}
          <View className='item-left'>
          {
            v % 2 === 0 
            ?
            <View className='normal' ><Text className='nuit'>￥</Text><Text className='price'>30</Text></View>
            :
            <View className='special'><Text className='price'>9</Text><Text className='nuit'>折</Text></View>
          }                        
          </View>          
          <View className='item-right'>
            <View className='title'>九毛九山西面馆(永旺店）</View>
            <View className='info'>
              <View>满500元减10元</View>              
            </View>
          </View>

          <View className='btn'>立即领取</View>
          {/* <View className='btn'>已领取</View> */ }
        </View>
        )) }
      </View>
    )
  }
}

export default ItemGood

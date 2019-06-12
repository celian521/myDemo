/**
 * VIP折扣商品
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

// import linkTo from '@/utils/linkTo.js'

import './itemGood.scss'

class ItemGood extends Component {
  render() {
    const { data } = this.props
    return (
      <View>
      { data.map(v => (
          <View key={v} className='good-item'>
            <View className='thumb'>
              <Image src='https://dummyimage.com/160x160/ddd/999' />
            </View>
            <View className='info'>
              <View className='name'>春风TryFun浪系列浪花遥控器浪系列浪花遥控器</View>
              <Text className='discount'>￥199</Text>
              <Text className='price'>￥399</Text>
            </View>
          </View>
        )) }
      </View>
    )
  }
}

export default ItemGood

/**
 * 优惠券列表
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components';
import linkTo from '@/utils/linkTo'
import PropTypes from 'prop-types';
import './ItemCoupon.scss';

export default class index extends Component {
  static propTypes = {
    data: PropTypes.array
  };

  static defaultProps = {
    data: []
  };

  handerLink = id => {
    console.log('handerLink', id)
    const url = `/pages/goods/index?id=${id}`
    linkTo({ url })
  }

  render() {
    const { data } = this.props
    return (
      <View className='conpon-block'>
        { data.map(v => (
          <View key={v} className='item' onClick={this.handerLink.bind(this, 3)}>
            <View className='item-left'>
              <View><Text className='nuit'>￥</Text><Text className='price'>30</Text></View>
              <View>满500元可用</View>
            </View>
            <View className='item-right'>
              <View className='title'>九毛九山西面馆(永旺店）</View>
              <View className='info'>
                <View>
                  <View>满500元减10元</View>
                  <View>剩余:10张</View>
                </View>
                <View>
                  <View className='btn'>立即使用</View>
                  {/* <View className='btn'>立即领取</View> */ }
                  <View className='watermark watermark-type02'>{/* 禁用状态 水印 */ }</View>
                </View>
              </View>
              <View className='bottom'>有效期：2019.04.12-2019.</View>
            </View>
          </View>
        )) }
      </View>
    )
  }
}

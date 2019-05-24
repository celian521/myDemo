/**
 * 商品ITEM
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components';
import linkTo from '@/utils/linkTo'
import PropTypes from 'prop-types';
import './ItemGoods.scss';

export default class index extends Component {
  static propTypes = {
    data: PropTypes.array,
    type: PropTypes.string
  };

  static defaultProps = {
    data: [],
    type: 'news', // news | card
  };

  handerLink = id => {

  }
  render() {
    // const { data } = this.props
    const data = [1, 2, 3, 4]
    return (
      <View className='list-card'>
        { data.map(v =>(
          <View key={v} className='item-card'>
            <View className='item-thumb'>
              <Image src='https://dummyimage.com/350x350/eee/999' />
            </View>
            <View className='item-content'>
              <View className='item-title'>店铺名称最长不超十字最长不超十字</View>
              <View className='item-info'>番禺广场永旺商城3楼F304番禺广场永旺商城3楼F304番禺广场永旺商城3楼F304番禺广场永旺商城3楼F304</View>
              <View> <Text className='price'> ¥599 </Text></View>
            </View>
          </View>
          )) }
      </View>
    )
  }
}

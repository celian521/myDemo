/**
 * 商品列表
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components';
import linkTo from '@/utils/linkTo'
import PropTypes from 'prop-types';
import './ItemGoods.scss';

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
    linkTo({url})
  }

  render() {
    const { data } = this.props
    return (
      <View className='goods-block'>
        { data.map(v => (
          <View key={v} className='item-goods' onClick={this.handerLink.bind(this, 1)}>
            <View className='item-thumb'>
              <Image src='https://dummyimage.com/350x350/eee/999' lazy-load />
            </View>
            <View className='item-content'>
              <View className='item-title'>goods店铺名称最长不超十字最长不超十字</View>
              <View className='item-info'>番禺广场永旺商城3楼F304番禺广场永旺商城3楼F304番禺广场永旺商城3楼F304番禺广场永旺商城3楼F304</View>
              <View className='item-tool'>
                <Text className='price'>¥599</Text>
                <View>
                  <Text className='label label-primary'>券</Text>
                  <Text className='label label-defaul'>预 售</Text>
                  <Text className='label label-vip'>VIP会员</Text>
                </View>
              </View>
            </View>
          </View>
        )) }
      </View>
    )
  }
}

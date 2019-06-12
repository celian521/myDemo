/**
 * 商店列表
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components';
import linkTo from '@/utils/linkTo'
import PropTypes from 'prop-types';
import './ItemStore.scss';

export default class index extends Component {
  static propTypes = {
    data: PropTypes.array,
  };
  static defaultProps = {
    data: [],
  };

  handerLink = id => {
    console.log('handerLink', id)
    const url = `/pages/goods/index?id=${id}`
    linkTo({url})
  }

  render() {
    const { data } = this.props
    return (
      <View style={{backgroundColor: '#f0f0f0'}}>
        {
          data.map(v => (
            <View key={v} className='item' onClick={this.handerLink.bind(this, 1)}>
              <View className='item-thumb'>
                <Image src='https://dummyimage.com/350x350/eee/999' lazy-load />
              </View>
              <View className='item-content'>
                <View className='item-title'>store{v.text}店铺名称最长不超十字(永旺店)店铺名称最长不超十字(永旺店)店铺名称最长不超十字(永旺店)店铺名称最长不超十字(永旺店)店铺名称最长不超十字(永旺店)店铺名称最长不超十字(永旺店)店铺名称最长不超十字(永旺店)</View>
                <View className='item-info'>商品203 优惠20 活动2</View>
                <View className='item-info'>番禺广场永旺商城3楼F304</View>
              </View>
            </View>
          ))
        }
      </View>
    )
  }
}

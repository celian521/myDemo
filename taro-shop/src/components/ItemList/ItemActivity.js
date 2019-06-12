/**
 * 活动列表
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components';
import linkTo from '@/utils/linkTo'
import PropTypes from 'prop-types';
import './ItemActivity.scss';

export default class index extends Component {
  static propTypes = {
    data: PropTypes.array
  };
  static defaultProps = {
    data: []
  };

  handerLink = id => {
    const url = `/pages/shop/main/index?id=${id}`
    linkTo({url})
  }

  render() {
    const { data } = this.props
    return (
      <View style={{backgroundColor: '#f0f0f0'}}>
        {
          data.map(v => (
            <View key={v} className='item' onClick={this.handerLink.bind(this, 2)}>
              <View className='item-thumb'>
                <Image src='https://dummyimage.com/300x182/ddd/999' lazy-load />
              </View>
              <View className='item-content'>
                <View className='item-title'>activity{v.text}全场4折音乐主题餐吧活动全场4折音乐主题餐吧活动全场4折音乐主题餐吧活动全场4折音乐主题餐吧活动</View>
                <View className='item-info'> 12/10-12/20 8:30-9:3</View>
                <View className='item-info'><Text className='price'>￥200</Text></View>
              </View>
            </View>
          ))
        }
      </View>
    )
  }
}

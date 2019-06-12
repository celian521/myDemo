/**
 * 优惠券列表
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, RichText } from '@tarojs/components';
import { AtButton } from 'taro-ui'
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
    console.log('handerLink', id)
    // const url = `/pages/goods/index?id=${id}`
    // linkTo({ url })
  }


  render() {
    const { data } = this.props
    return (
      <View className='activity-block'>
        { data.map(v => (
          <View key={v} className='item' onClick={this.handerLink.bind(this, 3)}>

            <View className='item-body'>
              <View className='item-thumb'>
                <Image src='https://dummyimage.com/264x160/ddd/999' />
              </View>
              <View className='item-content'>
                <View className='item-title'>activity{ v.text }全场4折音乐主题餐吧活动全场4折音乐主题餐吧活动全场4折音乐主题餐吧活动全场4折音乐主题餐吧活动</View>
                <View className='item-info'> 12/10-12/20 8:30-9:30</View>
                <View className='item-info'><Text className='price'>￥200</Text></View>
              </View>
            </View>

            <View className='item-label label02'>
              <RichText nodes='已<br />完成' />
            </View>

            <View className='item-bottom'>
              {/* <AtButton type='primary' circle size='small'>确认支付</AtButton> */}
              {/* <AtButton className='greenBtn' type='primary' circle size='small'>查看票券</AtButton> */}
              <View className='defaultBtn'>查看活动详情</View>
            </View>

          </View>
        )) }
      </View>
    )
  }
}

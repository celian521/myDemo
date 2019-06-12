/**
 * 优惠券列表
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components';
import { AtIcon, AtButton } from 'taro-ui'
import linkTo from '@/utils/linkTo'
import PropTypes from 'prop-types';
import './ItemOrder.scss';

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


  toOrderDetial = (id, status) => {
    linkTo({ url: `/pages/order/detial/index?status=${status}` })
  }

  render() {
    const { data } = this.props
    return (
      <View className='order-block'>
        { data.map(v => (
          <View key={v} className='item-card' onClick={this.handerLink.bind(this, 3)}>

            <View className='card-header'>
              <View className='header-title'>
                <Text>欧式ins旗舰店 </Text>
                <AtIcon value='chevron-right' size='16' color='#ccc'></AtIcon>
              </View>
              <View className='header-tool'>
                <Text className='text-danger'>待付款</Text>
                {/* <Text className='text-default'>交易成功</Text> */ }
              </View>
            </View>
            <View className='card-body'>
              <View className='item'>
                <View className='item-thumb'>
                  <Image src='https://dummyimage.com/350x350/eee/999' />
                </View>
                <View className='item-content'>
                  <View className='item-info'>
                    <View className='title'>法国香薰界传奇女王- AnS tee ge女士 法国香薰界传奇女王-AnSt eege女士</View>
                    <View className='sku'>黑色；牛奶味；90ml</View>
                  </View>
                  <View className='item-price'>¥88</View>
                </View>
              </View>

              <View className='item'>
                <View className='item-thumb'>
                  <Image src='https://dummyimage.com/350x350/eee/999' />
                </View>
                <View className='item-content'>
                  <View className='item-info'>
                    <View className='title'>法国香薰界传奇女王- AnS tee ge女士 法国香薰界传奇女王-AnSt eege女士</View>
                    <View className='sku'>黑色；牛奶味；90ml</View>
                  </View>
                  <View className='item-price'>¥88</View>
                </View>
              </View>

            </View>
            <View className='card-footer'>
              <View className='item-total'>共1件商品，合计: <Text className='price'>¥88.00</Text></View>

              <View className='item-tool'>
                <View className='item-btn'>
                  <AtButton circle size='small'>再次购买</AtButton>
                </View>
                <View className='item-btn'>
                  <AtButton circle size='small'  onClick={()=>{this.toOrderDetial('id',0)}}>取消订单</AtButton>
                </View>
                <View className='item-btn'>
                  <AtButton circle type='secondary' size='small' onClick={()=>{this.toOrderDetial('id',0)}}>去付款</AtButton>
                </View>
              </View>

            </View>
          </View>
        )) }
      </View>
    )
  }
}

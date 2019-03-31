import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components';
import { AtButton  } from 'taro-ui'
import './index.scss';

if (process.env.TARO_ENV === "weapp"){
  require("taro-ui/dist/style/components/flex.scss");
}

export default class List extends Component {
  handerLink = id => {
    const url = '/pages/details/index?id=3'
    Taro.navigateTo({url})
  }
  render() {
    const data = [1,2,3,4,5, 6,7]
    return (
      <View className='images-block-wrap'>
      <View className='images-block at-row at-row--wrap '>
        { data.map((item, index)=>(
            <View key={index} className='images-item at-col at-col-6 at-col--wrap'>
              <View className='images-inner'>
                <View className='images-img'>
                  <Image src='https://jdc.jd.com/img/350' lazyLoad mode='widthFix' />
                </View>
                <View className='images-title'>
                  活动集锦品味华服经典
                </View>
                <View className='images-info'>[查看详情]</View>
              </View>
            </View>
        ))}
      </View>
      </View>
    )
  }
}


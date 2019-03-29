import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components';
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
      <View>
      { data.map((item, index)=>(
      <View key={index} onClick={this.handerLink.bind('1')} className='news2-block at-row at-row__align--top'>
        <View className='at-col at-col-5'>
          <Image className='news2-img' src='https://jdc.jd.com/img/280x180' />
        </View>
        <View className='at-col at-col-7 at-col--wrap'>
          <View className='news2-title'>
          主轴+方向的
          </View>
          <View className='news2-info'>2009-04-12 12:00</View>
        </View>
      </View>
      ))}
      </View>
    )
  }
}


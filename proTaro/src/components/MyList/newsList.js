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
      <View key={index} onClick={this.handerLink.bind('1')} className='news-block at-row at-row__align--center'>
        <View className='at-col at-col-3'>
          <Image className='news-img' src='https://jdc.jd.com/img/150' />
        </View>
        <View className='at-col at-col-9 at-col--wrap'>
          <View className='news-title'>
            旗袍时尚-东方女性旗袍时尚-东方女性
          </View>
          <View className='news-info'>[查看详情]</View>
        </View>
      </View>
      ))}
      </View>
    )
  }
}


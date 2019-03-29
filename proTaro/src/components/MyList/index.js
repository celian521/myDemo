import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components';
import { AtButton  } from 'taro-ui'
import './index.scss';

if (process.env.TARO_ENV === "weapp"){
  require("taro-ui/dist/style/components/flex.scss");
}

export default class MyList extends Component {
  handerLink = id => {
    const url = '/pages/details/index?id=3'
    Taro.navigateTo({url})
  }
  render() {
    return (
      <View onClick={this.handerLink.bind('1')} className='myList at-row at-row__align--center'>
        <View className='ml-left at-col at-col-3'>
          <Image src='https://jdc.jd.com/img/150' />
        </View>
        <View className='ml-right at-col at-col-9 at-col--wrap'>

          <View className='title'>
          主轴方向的排列方式主轴方向的排列方式主轴方向的排列方式主轴
          </View>
          {/* <View className='info'>
          主轴方向的排列方式主轴方向的排列方式主轴方向的排列方式主轴方向的排列方式
          </View> */}
          <View className='info'>[查看详情]</View>
        </View>
      </View>
    )
  }
}


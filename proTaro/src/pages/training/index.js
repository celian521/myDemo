import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import MySwiper from '../../components/MySwiper'
import NewsList2 from '../../components/MyList/newsList2'

import './index.scss'

@inject('apisStore')
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {

    };
  }
  config = {
    navigationBarTitleText: '教育培训'
  }


  render () {
    const { apisStore: { banner } } = this.props
    return (
      <View className='wrap'>
        <View className='u-title'>名师风采</View>
        <MySwiper banner={banner} />
        <View className='u-title'>教育培训</View>
        <NewsList2 />
      </View>
    )
  }
}

export default Index

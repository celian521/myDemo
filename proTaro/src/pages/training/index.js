import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { ItemList, MySwiper } from '@components'

import './index.scss'

@inject('globalStore')
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
    const { globalStore: { banner } } = this.props
    return (
      <View className='wrap'>
        <View className='u-title'>名师风采</View>
        <MySwiper banner={banner} />
        <View className='u-title'>教育培训</View>
        <ItemList data={[]} type='card2' />
      </View>
    )
  }
}

export default Index

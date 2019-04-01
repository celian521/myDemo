import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtCalendar } from 'taro-ui'
import { MySwiper } from '@components'

import './index.scss'

@inject('apisStore')

@observer
class Index extends Component {
  constructor() {
    super(...arguments);

  }
  config = {
    navigationBarTitleText: '活动策划'
  }

  render() {
    const { apisStore: { banner } } = this.props
    return (
      <View className='wrap'>
        <MySwiper banner={banner} />
        <AtCalendar key='att' />
      </View>
    )
  }
}

export default Index

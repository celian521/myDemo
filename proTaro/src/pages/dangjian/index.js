import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { NewsList, ImagesList, NewsList2, MySwiper} from '@components'
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
    navigationBarTitleText: '党建公益'
  }


  render () {

    return (
      <View className='wrap'>
        <View className='u-title'>党建</View>
        <NewsList2 />
        <View className='u-title'>慈善公益</View>
        <NewsList2 />
      </View>
    )
  }
}

export default Index

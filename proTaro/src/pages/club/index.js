import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { ScrollList, MySwiper} from '@components'
import './index.scss'

@inject('globalStore')
@observer

class Index extends Component {

  config = {
    navigationBarTitleText: '企业家俱乐部'
  }

  componentWillMount() {}

  render () {
    const { globalStore: { banner } } = this.props
    return (
      <View className='wrap'>
        <View className='u-title'>企业家风采</View>
        <MySwiper banner={banner} />
        <View className='u-title'>产品展示</View>
        <ScrollList type='card2' newsType={1} loadMore={false} />
        <View className='u-title'>企业互动</View>
        <ScrollList type='news2' newsType={1} loadMore={false} />
        <View className='u-title'>私董会</View>
        <ScrollList type='news3' newsType={1} loadMore={false} />
      </View>
    )
  }
}

export default Index

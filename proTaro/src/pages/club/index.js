import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import MySwiper from '../../components/MySwiper'
import ImagesList from '../../components/MyList/imagesList'
import NewsList from '../../components/MyList/newsList'
import NewsList2 from '../../components/MyList/newsList2'
import './index.scss'

@inject('apisStore')
@observer

class Index extends Component {

  config = {
    navigationBarTitleText: '企业家俱乐部'
  }

  componentWillMount() {}

  render () {
    const { apisStore: { banner } } = this.props
    return (
      <View className='wrap'>
        <View className='u-title'>企业家风采</View>
        <MySwiper banner={banner} />
        <View className='u-title'>产品展示</View>
        <ImagesList />
        <View className='u-title'>企业互动</View>
        <NewsList />
        <View className='u-title'>私董会</View>
        <NewsList2 />
      </View>
    )
  }
}

export default Index
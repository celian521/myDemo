import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import { View } from '@tarojs/components'
import { AtDivider, AtButton, AtIcon, AtList, AtListItem } from 'taro-ui'
import { proSwiper } from '@components'
import ImagePicker from '@components/imagePicker'

import linkTo from '@utils/linkTo.js'

import './index.scss'

@inject()
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '商圈小程序',
    enablePullDownRefresh: true
  }

  onPullDownRefresh() {
    Taro.stopPullDownRefresh()
  }

  componentWillMount() {
    // console.log('Taro.ENV_TYPE', Taro.ENV_TYPE, Taro.getEnv(), process.env.NODE_ENV, process.env.TARO_ENV)
  }

  render() {
    const data = [{
      id:1,
      img_path: 'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
      title:'000'
    }, {
      id:2,
      img_path: 'https://img20.360buyimg.com/babel/s700x360_jfs/t1/4096/30/6924/98588/5ba49ceaE80dea401/7e6e5017a3a9de39.jpg!q90!cc_350x180',
      title:'000'
    }, {
      id:3,
      img_path: 'https://img20.360buyimg.com/babel/s700x360_jfs/t1/11092/6/9448/157017/5c78dfceE84babe4e/b2e7fdddad7034d9.jpg!q90!cc_350x180',
      title:'000'
    }, {
      id:4,
      img_path: 'https://dummyimage.com/750x360/eee/999',
      title:'000'
    }]
    return (
      <View>
        <proSwiper banner={data} />
        <ImagePicker />
        index
      </View>
    )
  }
}

export default Index

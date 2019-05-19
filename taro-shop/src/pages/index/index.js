import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import { View } from '@tarojs/components'
import { AtDivider, AtButton, AtIcon, AtList, AtListItem } from 'taro-ui'
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
    return (
      <View>
        <ImagePicker />
        index
      </View>
    )
  }
}

export default Index

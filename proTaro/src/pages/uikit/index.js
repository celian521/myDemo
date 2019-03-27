import Taro, { Component } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: 'UIKIT'
  }

  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render () {
    const { } = this.props
    return (
      <View className='index'>
      <RichText nodes='<div>opod<p>dadfa</p></div>' />
        <AtButton loading type='primary'>按钮=文案</AtButton>



      </View>
    )
  }
}

export default Index

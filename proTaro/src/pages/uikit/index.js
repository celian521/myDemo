import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, RichText } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './index.scss'

@inject('apisStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: 'UI-KIT'
  }

  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render () {
    const { apisStore: { banner} } = this.props
    console.log('banner', banner);

    return (
      <View className='index'>
       { banner.map((item, index) => (
        <View>{index} - {item.image_src}</View>
       ))}
      <RichText nodes='<div>opod<p>dadfa</p></div>' />
        {/* <AtButton loading type='primary'>按钮=文案</AtButton> */}
      </View>
    )
  }
}

export default Index

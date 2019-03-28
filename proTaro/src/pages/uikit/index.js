import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, RichText,  } from '@tarojs/components'
import { AtButton, AtSegmentedControl } from 'taro-ui'

import './index.scss'

@inject('apisStore')
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }
  config = {
    navigationBarTitleText: 'UI-KIT'
  }

  handleClick = value => {
    this.setState({
      current: value
    })
  }

  render () {
    // const { apisStore: { banner} } = this.props
    // console.log('banner', banner);

    return (
      <View>

      {/* <RichText nodes='<div>opod<p>dadfa</p></div>' /> */}
          <AtSegmentedControl
            values={['活动集锦', '学堂撷英', '旗袍']}
            onClick={this.handleClick.bind(this)}
            current={this.state.current}
          />
          {
            this.state.current === 0
            ? <View className='tab-content'>标签1的内容</View>
            : null
          }
          {
            this.state.current === 1
            ? <View className='tab-content'>标签2的内容</View>
            : null
          }
          {
            this.state.current === 2
            ? <View className='tab-content'>标签3的内容</View>
            : null
          }

      </View>
    )
  }
}

export default Index

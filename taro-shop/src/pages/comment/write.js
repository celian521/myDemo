/**
 * 写评论
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtTextarea, AtButton } from 'taro-ui'
import { ImagePicker } from '@/components'
// import apis from '@/apis'

import './write.scss'

@inject()
@observer
class Write extends Component {
  config = {
    navigationBarTitleText: '写评论',

  }
  constructor() {
    super(...arguments);
    this.state = {
      value: ''
    }
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <View className='write'>
        <AtTextarea
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          maxLength={500}
          height={200}
          placeholder='在这里写下您的评论喔！'
        />
        <ImagePicker />
        <View className='fixedBottom'>
          <AtButton type='primary' disabled={!this.state.value} >发 表</AtButton>
        </View>
      </View>
    )
  }
}

export default Write

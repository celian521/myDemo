/**
 * 意见反馈
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import { View, Text } from '@tarojs/components'
import { AtForm, AtTextarea, AtButton, AtInput } from 'taro-ui'


// import apis from '@/apis'
// import linkTo from '@/utils/linkTo.js'


import './index.scss'


@inject('globalStore')

@observer
class Feedback extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      falg: false,
      fromData: {
        information: '',
        content: ''
      }
    }
  }
  config = {
    navigationBarTitleText: '意见反馈',
  }

  handleChange = (key, event) => {
    const value = typeof (event) == 'object' ? event.target.value : event
    this.setState(preState => {
      preState.fromData[key] = value
    })
  }
  onSubmit = e => {
    this.setState({
      falg: true
    })
    const temp = this.state.fromData
    console.log('temp', temp)
    setTimeout(() => {
      this.setState({
        falg: false
      })
    }, 3000);
  }

  render() {
    const { fromData, falg } = this.state
    const { information, content } = fromData
    return (
      <View className='feedback'>
        <AtForm
          onSubmit={this.onSubmit.bind(this)}
        >
          <AtTextarea
            value={content}
            onChange={this.handleChange.bind(this, 'content')}
            maxLength={200}
            height={200}
            placeholder='欢迎反馈任何意见和问题，您的反馈是我们产品进步的动力'
          />
          <View className='title'>
            请留下您的联系方式(QQ/微信/手机)
        </View>
          <AtInput
            name='value'
            type='text'
            border={false}
            clear
            placeholder='QQ/微信/手机号'
            value={information}
            onChange={this.handleChange.bind(this, 'information')}
          />
          <View className='desc'>如急需帮助，可拨打我司客服热线：020-37102222进行人工咨询（人工服务时间：9:00 - 21:30）客服QQ群：689446595</View>
          <View className='btn'>
            <AtButton type='primary' formType='submit' disabled={!(!!information && !!content && !falg)} loading={falg} >提 交</AtButton>
          </View>
        </AtForm>
      </View>
    )
  }
}

export default Feedback

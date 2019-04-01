import Taro, { Component } from '@tarojs/taro'
import { AtForm, AtInput, AtButton } from 'taro-ui'

import './index.scss'



class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      value2: ''
    }
  }
  config = {
    navigationBarTitleText: 'DEMO'
  }


  handleChange = (value) => {
    this.setState({
      value
    })
  }
  onSubmit = (event) => {
    console.log(event)
  }

  render () {
    return (
      <AtForm
        onSubmit={this.onSubmit.bind(this)}
      >
        <AtInput
          name='value'
          title='文本'
          type='text'
          placeholder='单行文本'
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        <AtInput
          name='value2'
          title='文本'
          type='text'
          placeholder='单行文本'
          value={this.state.value2}
          onChange={this.handleChange.bind(this)}
        />
        <AtButton formType='submit' type='primary'>提交</AtButton>
      </AtForm>
    )
  }
}

export default Index


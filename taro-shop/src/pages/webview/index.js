import Taro, { Component } from '@tarojs/taro'
import { View, WebView } from '@tarojs/components'

import './index.scss'

export default class extends Component {

  config = {
    navigationBarTitleText: ''
  }

  constructor() {
    super(...arguments);
    this.state = {
      message: null
    }
  }

  url = ''
  title = ''
  msg = ''
  componentWillMount() {
    this.url = decodeURIComponent(this.$router.params.url || '') + '#wechat_redirect'
    this.title = decodeURIComponent(this.$router.params.title || '')
    Taro.setNavigationBarTitle({ title: this.title })
  }

  onMessage = (e) => {
    console.log('postmessage', e.detail.data[0])
    this.msg = e.detail.data[0]
    this.setState({
      message: e.detail.data[0]
    })
  }
  onLoad = (e) => {
    console.log('bindload', e)
  }
  onError = (e) => {
    console.log('binderror', e)
  }

  onShareAppMessage(options) {

    const { message } = this.state
    console.log(options, this.msg)

    return {
      title: this.msg
      // path: '/pages/member/index',
      // imageUrl: 'https://dummyimage.com/150x150/eee/999'
    }
  }

  render() {
    return (
      <View className='webview'>
        <WebView
          src={ this.url }
          onMessage={ this.onMessage }
          onLoad={ this.onLoad }
          onError={ this.onError } />
      </View>
    )
  }
}

import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { } from 'taro-ui'

import './index.scss'

@inject('globalStore')
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {

    };
  }
  config = {
    navigationBarTitleText: 'UIKIT'
  }


  render() {

    return (
      <View>

      </View>
    )
  }
}

export default Index

/**
 * 搜索页面
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import { View, Text } from '@tarojs/components'
import { AtButton,  } from 'taro-ui'
// import { PkgCard } from '@components'
// import apis from '@apis'
// import linkTo from '@utils/linkTo.js'


import './index.scss'

@inject()

@observer
class Search extends Component {
  constructor() {
    super(...arguments);
    this.state = {

    }
  }

  config = {
    navigationBarTitleText: '搜索'
  }


  render() {
    const { } = this.state

    return (
      <View>
搜索 PAGE
      </View>
    )
  }
}

export default Search

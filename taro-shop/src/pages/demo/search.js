/**
 * 搜索页面
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import { View, Text } from '@tarojs/components'
import { AtButton, AtSearchBar } from 'taro-ui'
// import { PkgCard } from '@/components'
// import apis from '@/apis'
// import linkTo from '@/utils/linkTo.js'


import './index.scss'

// @inject()

// @observer
class Search extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: null
    }
  }

  config = {
    navigationBarTitleText: '搜索'
  }

  onChange(value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('开始搜索')
  }
  render() {
    const { } = this.state

    return (
      <View>
        <AtSearchBar style={{lineHeight: 2}}
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onActionClick={this.onActionClick.bind(this)}
        />
      </View>
    )
  }
}

export default Search

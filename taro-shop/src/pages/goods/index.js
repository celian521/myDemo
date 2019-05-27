/**
 * 详情页面
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import { View } from '@tarojs/components'
// import { AtButton, AtSearchBar } from 'taro-ui'
import { ItemList } from '@/components'
// import apis from '@/apis'
// import linkTo from '@/utils/linkTo.js'

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
    navigationBarTitleText: '详情'
  }



  render() {
    const { } = this.state

    return (
      <View>
        <ItemList type='goods' />
      </View>
    )
  }
}

export default Search

/**
 * 搜索页面
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import { View, Text, Map } from '@tarojs/components'
import { AtButton, } from 'taro-ui'
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
    navigationBarTitleText: '地图'
  }

  onTap = e => {
    console.log(e)
    Taro.openLocation({
      longitude: 113.324520,
      latitude: 23.099994,
      scale: 18
    })

  }

  render() {
    const { } = this.state
    const markers = [{
      iconPath: 'http://weixin.singworld.net/web_frontend/images/school/radio.svg',
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }]
    return (
      <View>
        <Map id='map'
          longitude='113.324520'
          latitude='23.099994'
          markers={markers}
          scale='14'
          show-location
          onClick={this.onTap}
          style={{ width: '100vw', height: '100vh' }}
        />
      </View>
    )
  }
}

export default Search

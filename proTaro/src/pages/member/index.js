import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, RichText } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { MySwiper } from '@components'

import Aboutus from './aboutus'
import Joinus from './joinus'
import Serve from './serve'
import List from './list'

import './index.scss'

@inject('globalStore')
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      tabList: [{
        title: '关于我们'
      }, {
        title: '加入我们'
      }, {
        title: '会员服务'
      }, {
        title: '旗袍时尚'
      }
      ]
    }
  }
  config = {
    navigationBarTitleText: '会员中心'
  }

  tabClick = value => {
    this.setState({
      current: value
    })
  }
  render() {
    const { globalStore: { banner } } = this.props
    const { tabList, current } = this.state
    return (
      <View className='wrap'>
        <MySwiper banner={banner} />
        <AtTabs
          current={this.state.current}
          swipeable={false}
          tabList={tabList}
          onClick={this.tabClick.bind(this)}
        ></AtTabs>
        <View className='wrap-top'>
          { current === 0 ? <Aboutus /> : null }
          { current === 1 ? <Joinus /> : null }
          { current === 2 ? <Serve /> : null }
          { current === 3 ? <List /> : null }
        </View>
      </View>
    )
  }
}

export default Index

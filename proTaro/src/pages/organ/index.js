import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { ItemList, MySwiper } from '@components'

import './index.scss'

@inject('globalStore')
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      tabList: [{
        title: '分支机构简介'
      }, {
        title: '分会风采'
      }
      ]
    }
  }
  config = {
    navigationBarTitleText: '分支机构'
  }
  handleClick = value => {
    this.setState({
      current: value
    })
  }

  render() {
    const { globalStore: { banner } } = this.props
    const { tabList } = this.state

    return (
      <View className='wrap'>
        <MySwiper banner={banner} />
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane className='wrap-top' current={this.state.current} index={0} >
            <ItemList type='news2' />
          </AtTabsPane>
          <AtTabsPane className='wrap-top' current={this.state.current} index={1}>
            <ItemList type='card2' />
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Index

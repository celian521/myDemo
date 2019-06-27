/**
 * 我的关注
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import { View } from '@tarojs/components'
import { AtTabs, AtLoadMore } from 'taro-ui'
import { ItemList, Empty } from '@/components'

// import apis from '@/apis'
// import linkTo from '@/utils/linkTo.js'


import './index.scss'

// @inject()

// @observer
class Collect extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      type: 'store',
      data: [],
      status: 'loading'
    }
  }

  flag = false // ture: 数据加载中
  tabList = [{ title: '主办方', type:'store' }, { title: '活动', type:'activity' }, { title: '商品', type:'goods' }]

  config = {
    navigationBarTitleText: '我的关注',
    enablePullDownRefresh: true,
    onReachBottomDistance: 50
  }

  onReachBottom() {
    this.load()
  }
  onPullDownRefresh() {
    this.init()
    Taro.stopPullDownRefresh()
  }
  componentWillMount() {
    this.init()
  }
  // 初始化
  init() {
    this.falg = false
    this.setState({
      status: 'loading',
      data: []
    }, () => {
      this.load()
    })
  }
  // 加载数据
  load() {
    if (this.falg) return false //数据加载中， 禁止r执行
    if (this.state.status !== 'loading') return false
    this.falg = true

    setTimeout(() => {
      const temp = Array.from(new Array(10)).map((_val, i) => ({
        url: 'https://dummyimage.com/300x300/eee/999',
        text: `name${i}`,
      }));
      this.falg = false
      this.setState(preState => {
        preState.data = [...this.state.data, ...temp]
      }, () => {
        const preData = this.state.data
        if (preData.length > 50) this.setState({ status: 'noMore' })
        if (preData.length === 0) this.setState({ status: 'empty' })
      })
    }, 2000);

  }
  handleTab(value) {
    if (this.falg) return false //数据加载中， 禁止r执行
    this.init()
    this.setState({
      current: value,
      type: this.tabList[value].type
    })
  }
  render() {
    const { data, status, type } = this.state
    return (
      <View>
        <View className='fixed-top'>
          <AtTabs
            current={this.state.current}
            tabList={this.tabList}
            animate={false}
            onClick={this.handleTab.bind(this)}
          />
        </View>
        <View className='space'>{/* 空间占位 */ }</View>
        <ItemList type={type} data={data} />
        { // 页面数据提示
          status === 'empty'
            ?
            <Empty />
            :
            <AtLoadMore status={status} noMoreText='没有更多数据' />
        }
      </View>
    )
  }

}

export default Collect

/**
 * 积分记录
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import { View, Text } from '@tarojs/components'
import { AtTabs, AtLoadMore, AtList, AtListItem } from 'taro-ui'
import { Empty } from '@/components'

// import apis from '@/apis'
// import linkTo from '@/utils/linkTo.js'


import './index.scss'

@inject()

@observer
class Integral extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      data: [],
      status: 'loading'
    }
  }

  flag = false // ture: 数据加载中
  tabList = [{ title: '积分记录' }, { title: '兑换记录' }]

  config = {
    navigationBarTitleText: '积分记录',
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
      current: value
    })
  }
  render() {
    const { data, status } = this.state
    return (
      <View>
        <View className='fixed-top'>
          <View className='integral-total'>
            <View className='total'>
              <Text className='num'>900 </Text>积分
          </View>
            <Text>积分将于2020-04-01 18:00:00 过期</Text>
          </View>
          <AtTabs
            className='myAtTabs'
            current={this.state.current}
            tabList={this.tabList}
            animate={false}
            onClick={this.handleTab.bind(this)}
          />
        </View>

        <View className='space'>{/* 空间占位 */ }</View>

        <AtList>
          {
            data.map(item => {
              return (
                <AtListItem key='' className='list-item' title='商品下单' note='2019-04-29 11:50:00' extraText='+100' />
              )
            })
          }
        </AtList>

        { // 页面数据提示
          status === 'empty'
            ?
            <Empty text='暂无优惠券' />
            :
            <AtLoadMore status={status} noMoreText='没有更多数据' />
        }
      </View>
    )
  }
}

export default Integral

/**
 * 上按刷新， 下接加载 列表 DEMO
 */
import Taro, { Component } from '@tarojs/taro'
// import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtLoadMore, } from 'taro-ui'
import { ItemList, Empty, FilterList } from '@/components'
// import apis from '@/apis'

import './index.scss'

// @inject()
// @observer
class List extends Component {
  config = {
    navigationBarTitleText: '列表',
    enablePullDownRefresh: true,
    onReachBottomDistance: 50
  }
  constructor() {
    super(...arguments);
    this.state = {
      data: [],
      status: 'loading'
    }
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
    // console.log('init')
    this.setState({
      status: 'loading',
      data: []
    }, () => {
      this.load()
    })
  }
  // 加载数据
  load() {
    if (this.state.status !== 'loading') return false

    setTimeout(() => {
      const temp = Array.from(new Array(9)).map((_val, i) => ({
        url: 'https://dummyimage.com/300x300/eee/999',
        text: `name${i}`,
      }));

      this.setState(preState => {
        preState.data = [...this.state.data, ...temp]
      }, () => {
        const preData = this.state.data
        if (preData.length > 50) this.setState({ status: 'noMore' })
        if (preData.length === 0) this.setState({ status: 'empty' })
      })
    }, 200);

  }
  onChangeFilter(e) {
    this.init()
    console.log('onChangeFilter==>', e)
  }
  render() {
    const { data, status } = this.state
    const filterData = [{
      label: '全部', value: 'a1', options: [
        { label: '全部', value: 'n1', desc: '300' },
        { label: '营销', value: 'n2', desc: '23' },
        { label: '优惠', value: 'n3', desc: '5' },
        { label: '体验', value: 'n4', desc: '9' },
        { label: '赛事', value: 'n5', desc: '120' },
        { label: '知识', value: 'n6', desc: '9' },
        { label: '预售', value: 'n7', desc: '9' }
      ]
    }, {
      label: '日期', value: 'a2', options: [
        { label: '全时段', value: 'd1' },
        { label: '今天', value: 'd2' },
        { label: '明天', value: 'd3' },
        { label: '本周', value: 'd4' },
        { label: '本周末', value: 'd5' },
        { label: '本月', value: 'd6' }
      ]
    }, {
      label: '位置', value: 'a3', options: [
        { label: '线上活动', value: 'm1' },
        { label: '线下活动', value: 'm2' }
      ]
    }, {
      label: '价格', value: 'a4', options: [
        { label: '免费活动', value: 'p1' },
        { label: '付费活动', value: 'p2' }
      ]
    }]
    return (
      <View>
        <FilterList placeholder='搜索活动' data={filterData} onChange={this.onChangeFilter} />
        <ItemList type='activity' data={data} />
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

export default List

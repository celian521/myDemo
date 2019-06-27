/**
 * 上按刷新， 下接加载 列表 DEMO
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtLoadMore, } from 'taro-ui'
import { ItemList, Empty, FilterList } from '@/components'
// import apis from '@/apis'

import './index.scss'

// @inject()
// @observer
class List extends Component {
  config = {
    navigationBarTitleText: '领券中心',
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
      label: '全部', value: 'a1'
    }, {
      label: '美食', value: 'a2'
    }, {
      label: '娱乐', value: 'a3'
    }, {
      label: '时尚', value: 'a4'
    },{
      label: '教育', value: 'a5'
    },{
      label: '美食', value: 'a6'
    }, {
      label: '娱乐', value: 'a7'
    }, {
      label: '时尚', value: 'a8'
    },{
      label: '教育', value: 'a9'
    }]
    return (
      <View>
        <FilterList placeholder='搜索优惠券' data={filterData} onChange={this.onChangeFilter} />
        <ItemList type='coupon' data={data} />
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

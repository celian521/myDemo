/**
 * 上按刷新， 下接加载 列表 DEMO
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtList, AtLoadMore } from 'taro-ui'
import { ItemList } from '@/components'
// import apis from '@/apis'

import './index.scss'

@inject()
@observer
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

    // apis.getPayHistoryList({'uid': 646608, mid:2301, card_type:1}).then(({data})=>{
    //   // console.log(data)
    //   this.setState(preState => {
    //     preState.data = [...this.state.data, ...data]
    //   }, () => {
    //     const preData = this.state.data
    //     if (preData.length > 1 || preData.length === 0) this.setState({ status: 'noMore' })
    //   })
    // })

    setTimeout(() => {
      const temp = Array.from(new Array(10))
      this.setState(preState => {
        preState.data = [...this.state.data, ...temp]
      }, () => {
        const preData = this.state.data
        if (preData.length > 25 || preData.length === 0) this.setState({ status: 'noMore' })
      })
    }, 1000);

  }

  render() {
    const { data, status } = this.state
    const len = data.length
    const noMoreText = len > 0 ? '没有更多数据' : '暂无数据'
    return (
      <View>
        <ItemList type='item' data={data} />
        <AtLoadMore status={status} noMoreText={noMoreText} />
      </View>
    )
  }
}

export default List

/**
 * 上按刷新， 下接加载 列表 DEMO
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtList, AtListItem, AtLoadMore } from 'taro-ui'
// import apis from '@/apis'

import './index.scss'

// @inject()
// @observer
class List extends Component {
  config = {
    navigationBarTitleText: '记录列表',
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
    const noMoreText = len > 0 ? '没有更多记录' : '暂无充值记录'
    return (
      <View>
        <AtList>
          {
            data.map( (item, index) => {
              const price = '99'
              const time = '0'
              return (
              <AtListItem key='' title='购买成功' note={time} extraText={price} />
            )})
          }
        </AtList>
        <AtLoadMore status={status} noMoreText={noMoreText} />
      </View>
    )
  }
}

export default List

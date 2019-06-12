/**
 * 活动讨论
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, Text } from '@tarojs/components'
import { AtLoadMore, AtFab } from 'taro-ui'
import { ItemComment, Empty } from '@/components'
// import apis from '@/apis'
import linkTo from '@/utils/linkTo.js'
import './index.scss'

@inject()
@observer
class List extends Component {
  config = {
    navigationBarTitleText: '活动讨论',
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

  render() {
    const { data, status } = this.state

    return (
      <View>

        <ItemComment data={data} />
        { // 页面数据提示
          status === 'empty'
            ?
            <Empty />
            :
            <AtLoadMore status={status} noMoreText='没有更多数据' />
        }
        <View className='fixedBtn' onClick={() => linkTo({ url: '/pages/comment/write' })}>
          <Text className='icon icon-write'></Text>
        </View>
      </View>
    )
  }
}

export default List

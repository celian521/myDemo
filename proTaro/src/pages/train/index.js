import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { MySwiper, ScrollList } from '@components'
import apis from '@apis'

import './index.scss'

@inject('globalStore')

@observer
class Train extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      dataBanner: []
    };
  }

  config = {
    navigationBarTitleText: '教育培训',
    "enablePullDownRefresh": true,
    onReachBottomDistance: 50
  }

  componentDidMount() {
    this.fetchBanner()
  }

  onPullDownRefresh() {
    this.ScrollList.init()
    Taro.stopPullDownRefresh()
  }
  onReachBottom() {
    this.ScrollList.load()
  }


  /**
   * 获取数据
   */
  fetchBanner = () => {
    apis.getPage({ page_path: this.$router.path }).then(({ data }) => {
      this.setState({
        dataBanner: data[1]
      })
    })
  }

  render() {
    const { dataBanner } = this.state
    return (
      <View className='wrap'>
        <View className='u-title'>名师风采</View>
        <MySwiper banner={dataBanner} />
        <View className='u-title'>教育培训</View>
        <ScrollList type='card2' newsType={14} pageSize={2} ref={node => this.ScrollList = node} />
      </View>
    )
  }
}

export default Train

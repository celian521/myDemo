import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { ScrollList, MySwiper } from '@components'
import apis from '@apis'
import './index.scss'

@inject('globalStore')

@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      dataBanner: []

    }
  }
  config = {
    navigationBarTitleText: '企业家俱乐部'
  }

  onShareAppMessage(res) {}

  componentWillMount() {
    this.fetchBanner()
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
        <View className='u-title'>企业家风采</View>
        <MySwiper banner={dataBanner} />
        <View className='u-title'>企业产品展示</View>
        <ScrollList type='card2' newsType={37} pageSize={6} loadMore={false} />
        <View className='u-title'>企业互动</View>
        <ScrollList type='news2' newsType={38} pageSize={6} loadMore={false} />
        <View className='u-title'>私董会</View>
        <ScrollList type='news3' newsType={34} pageSize={6} loadMore={false} />
      </View>
    )
  }
}

export default Index

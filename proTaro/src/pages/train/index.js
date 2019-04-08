import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { ItemList, MySwiper } from '@components'
import apis from '@apis'

import './index.scss'

@inject('globalStore')
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      dataBanner: []
    };
  }
  config = {
    navigationBarTitleText: '教育培训'
  }

  componentDidMount() {
    this.fetchBanner()
  }
  /**
   * 获取数据
   */
  fetchBanner = () => {
    apis.getPage({ page_path: this.$router.path }).then(({data}) => {
      console.log("menberdd", data)
      this.setState({
          dataBanner: data[1]
      })
    })
  }
  render () {
    const { dataBanner } = this.state
    return (
      <View className='wrap'>
        <View className='u-title'>名师风采</View>
        <MySwiper banner={dataBanner} />
        <View className='u-title'>教育培训</View>
        <ItemList type='news2' />
      </View>
    )
  }
}

export default Index

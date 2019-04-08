import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, RichText } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { MySwiper } from '@components'
import apis from '@apis'
import Aboutus from './aboutus'
import Joinus from './joinus'
import Serve from './serve'
import List from './list'

import './index.scss'

@inject('globalStore')
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      dataBanner: [],
      tabList: [{
        title: '关于我们'
      }, {
        title: '加入我们'
      }, {
        title: '会员服务'
      }, {
        title: '旗袍时尚'
      }
      ]
    }
  }
  config = {
    navigationBarTitleText: '会员中心'
  }
  componentDidMount() {
    this.fetchBanner()
  }
  /**
   * 获取数据
   */
  fetchBanner = () => {
    apis.getPage({ page_path: this.$router.path}).then(({data}) => {
      console.log("menber", data)
      this.setState({
          dataBanner: data[1]
      })
    })
  }
  tabClick = value => {
    this.setState({
      current: value
    })
  }
  render() {
    // const { globalStore: { banner } } = this.props
    const { tabList, current, dataBanner } = this.state
    return (
      <View className='wrap'>
        <MySwiper banner={dataBanner} />
        <AtTabs
          current={this.state.current}
          swipeable={false}
          tabList={tabList}
          onClick={this.tabClick.bind(this)}
        ></AtTabs>
        <View className='wrap-top' style={{marginBottom: '10vh'}}>
          { current === 0 ? <Aboutus /> : null }
          { current === 1 ? <Joinus /> : null }
          { current === 2 ? <Serve /> : null }
          { current === 3 ? <List /> : null }
        </View>
      </View>
    )
  }
}

export default Index

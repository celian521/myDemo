import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtTabs } from 'taro-ui'
import { MySwiper, ScrollList } from '@components'
import apis from '@apis'
import Aboutus from './aboutus'
import Joinus from './joinus'

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

  onReachBottom() {
    if (this.state.current === 3) this.ScrollList.load()
  }

  componentDidMount() {
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
  tabClick = value => {
    this.setState({
      current: value
    })
  }
  render() {
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
        <View className='wrap-top wrap-bottom'>
          { current === 0 ? <Aboutus newsId='60' /> : null }
          { current === 1 ? <Joinus /> : null }
          { current === 2 ? <Aboutus newsId='61' /> : null }
          { current === 3 ? <ScrollList type='card' newsType={20} ref={node => this.ScrollList = node} /> : null }
        </View>
      </View>
    )
  }
}

export default Index

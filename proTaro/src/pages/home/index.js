import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtGrid, AtDivider } from 'taro-ui'
import { MySwiper, ScrollList } from '@components'
import apis from '@apis'
import linkTo from '@utils/linkTo'
import mock from '../../mock'
import './index.scss'

@inject('globalStore')

@observer
class Home extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      tabCurrent: 0,
      navGrid: mock.grid || [],
      tabList: [{
        title: '活动集锦',
      }, {
        title: '学堂撷英',
      }, {
        title: '旗袍时尚',
      }],
      dataBanner: {
        type_1: [],
        type_2: [],
        type_3: [],
        type_4: []
      }
    }
  }
  config = {
    navigationBarTitleText: '旗袍文化促进会',
    // "enablePullDownRefresh": true,
    onReachBottomDistance: 50
  }

  // onPullDownRefresh() {
  //   this.ScrollList.init()
  //   Taro.stopPullDownRefresh()
  // }

  onReachBottom() {
    switch (this.state.tabCurrent) {
      case 0: this.ScrollList0.load()
        break;
      case 1: this.ScrollList1.load()
        break;
      case 2: this.ScrollList2.load()
        break;
      default:
        break;
    }
  }

  /**
   * 获取数据
   */
  fetchBanner = () => {
    apis.getPage({ page_path: this.$router.path }).then(({ data }) => {
      this.setState(preState => {
        preState.dataBanner = {
          type_1: data[1] || [],
          type_2: data[2] || [],
          type_3: data[3] || [],
          type_4: data[4] || []
        }
      })
    })
  }


  componentDidMount() {
    this.fetchBanner()
  }

  handleTabs = value => {
    this.setState(
      { tabCurrent: value }
    )
  }

  handleGrid = (item, index) => {
    const url = item.url
    linkTo({ url })
  }

  render() {
    const { tabList, dataBanner, navGrid } = this.state
    return (
      <View className='wrap'>
        <MySwiper banner={dataBanner.type_1} />
        <AtGrid hasBorder={false} data={navGrid} onClick={this.handleGrid} />

        <AtDivider content='活动预告' className='myDivider' lineColor='#855498' fontColor='#666666' />
        <MySwiper banner={dataBanner.type_2} />

        <AtDivider content='智慧学堂' className='myDivider' lineColor='#855498' fontColor='#666666' />
        <MySwiper banner={dataBanner.type_3} />

        <AtDivider content='企业家风采' className='myDivider' lineColor='#855498' fontColor='#666666' />
        <MySwiper banner={dataBanner.type_4} />

        <View className='u-title'>新闻资讯</View>
        <AtTabs
          className='tabList'
          current={this.state.tabCurrent}
          swipeable={false}
          tabList={tabList}
          onClick={this.handleTabs.bind(this)}
        >
          <AtTabsPane className='wrap-top' current={this.state.tabCurrent} index={0}>
            <ScrollList type='news' newsType={9} ref={node => this.ScrollList0 = node} />
          </AtTabsPane>
          <AtTabsPane className='wrap-top' current={this.state.tabCurrent} index={1}>
            <ScrollList type='news' newsType={24} ref={node => this.ScrollList1 = node} />
          </AtTabsPane>
          <AtTabsPane className='wrap-top' current={this.state.tabCurrent} index={2}>
            <ScrollList type='news' newsType={20} ref={node => this.ScrollList2 = node} />
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Home

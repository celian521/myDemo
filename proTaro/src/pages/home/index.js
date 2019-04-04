import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtGrid, AtDivider, AtLoadMore  } from 'taro-ui'
import { NewsList, ImagesList, NewsList2, MySwiper } from '@components'
import TabList from './tabList'
import apis from '@apis'

import './index.scss'

@inject('globalStore')

@observer
class Home extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      tabCurrent: 0,
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
    // onReachBottomDistance:50
  }

  // onPullDownRefresh(){
  //   Taro.stopPullDownRefresh()
  // } //下拉事件

  // onReachBottom(){
  //   console.log('onReachBottom')
  // }//上拉事件监听

  /**
   * 获取数据
   */
  fetchBanner = () => {
    apis.getPage({ page_path: '/pages/index/index' }).then(({data}) => {
      this.setState( preState => {
        preState.dataBanner = {
          type_1: data[1] || [],
          type_2: data[2] || [],
          type_3: data[3] || [],
          type_4: data[4] || []
        }
      }, () => {
        console.log('dataBanner', this.state.dataBanner)
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
    if (index == 0 || index == 2) {
      Taro.switchTab({ url })
    } else {
      Taro.navigateTo({ url })
    }
  }

  render() {
    const { globalStore: { grid } } = this.props
    const { tabList, dataBanner } = this.state
    return (
      <View className='wrap'>

        <MySwiper banner={dataBanner.type_1} />
        <AtGrid hasBorder={false} data={grid} onClick={this.handleGrid} />

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
            <TabList newsType={1} hasFetch />
          </AtTabsPane>
          <AtTabsPane className='wrap-top' current={this.state.tabCurrent} index={1}>
            <TabList newsType={24} hasFetch />
          </AtTabsPane>
          <AtTabsPane className='wrap-top' current={this.state.tabCurrent} index={2}>
            <TabList newsType={3} hasFetch />
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Home

import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtGrid, AtDivider, AtLoadMore  } from 'taro-ui'
import { NewsList, ImagesList, NewsList2, MySwiper } from '@components'

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
        type: 1,
        page: 1,
        status: 'loading'
      }, {
        title: '学堂撷英',
        type: 2,
        page: 1,
        status: 'loading'
      }, {
        title: '旗袍时尚',
        type: 3,
        page: 1,
        status: 'loading'
      }],
      dataList: {
        type_0: [],
        type_1: [],
        type_2: []
      },
      dataBanner: {
        type_1: [],
        type_2: [],
        type_3: []
      }
    }
  }
  config = {
    navigationBarTitleText: '旗袍文化促进会',
    "enablePullDownRefresh": true,
    onReachBottomDistance:50
  }

  onPullDownRefresh(){
    Taro.stopPullDownRefresh()
  } //下拉事件

  onReachBottom(){
    console.log('onReachBottom')
    this.fetchList()
  }//上拉事件监听

  /**
   * 获取数据
   */
  fetchData = () => {
    apis.getPage({ page_path: '/pages/index/index' }).then(({data}) => {
      this.setState({
        dataBanner: data
      })
    })
  }
  fetchList = key => {
    const { tabCurrent, tabList } = this.state;
    const news_type = tabList[tabCurrent].type
    const page = tabList[tabCurrent].page
    if(!key) key = `type_${tabCurrent}`
    const status = tabList[tabCurrent].status
    if(status==='loading'){
      apis.getList({ news_type, page, pageSize: 10 }).then(({data}) => {
        const oldData = this.state.dataList[key] || []
        this.setState({
          dataList: { [key]: [ ...oldData, ...data ]}
        })
        if(oldData.length>10){
          tabList[tabCurrent].status = 'noMore'
          this.setState({
            tabList
          })
        }
      })
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  handleTabs = value => {
    this.setState(
      { tabCurrent: value },
      ()=>{
        this.fetchList(`type_${value}`)
      }
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
    const { globalStore: { banner, grid } } = this.props
    const { tabList, dataList, dataBanner } = this.state
    return (
      <View className='wrap'>

        <MySwiper banner={dataBanner[1]} />

        <AtGrid hasBorder={false} data={grid} onClick={this.handleGrid} />

        <AtDivider content='活动预告' className='myDivider' lineColor='#855498' fontColor='#666666' />

        <MySwiper banner={banner} />

        <AtDivider content='智慧学堂' className='myDivider' lineColor='#855498' fontColor='#666666' />

        <MySwiper banner={banner} />

        <View className='u-title'>新闻资讯</View>

        <AtTabs className='tabList' current={this.state.tabCurrent} swipeable={false} tabList={tabList} onClick={this.handleTabs.bind(this)}>
          <AtTabsPane className='wrap-top' current={this.state.tabCurrent} index={0}>
            <NewsList dataList={dataList.type_0} />
            <AtLoadMore status={tabList[0].status} />
          </AtTabsPane>
          <AtTabsPane className='wrap-top' current={this.state.tabCurrent} index={1}>
            <NewsList dataList={dataList.type_1} />
            <AtLoadMore  status={tabList[1].status} />
          </AtTabsPane>
          <AtTabsPane className='wrap-top' current={this.state.tabCurrent} index={2}>
            <NewsList dataList={dataList.type_2} />
            <AtLoadMore status={tabList[2].status} />
          </AtTabsPane>
        </AtTabs>

      </View>
    )
  }
}

export default Home

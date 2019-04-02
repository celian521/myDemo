import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, ScrollView } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtGrid, AtDivider } from 'taro-ui'
import { NewsList, ImagesList, NewsList2, MySwiper } from '@components'
import http from '@utils/http'

import './index.scss'

@inject('apisStore')

@observer
class Home extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      tabList: [{
        title: '活动集锦'
      }, {
        title: '学堂撷英'
      }, {
        title: '旗袍时尚'
      }],
      dataNewsList: []
    }
  }
  config = {
    navigationBarTitleText: '旗袍文化促进会'
  }

  componentDidMount() {

    // Taro.startPullDownRefresh({}).then(()=>{
    //   console.log('startPullDownRefresh');
    //   Taro.stopPullDownRefresh()
    // })

    //

    http.post('/wx/newsList', { news_type: 2, page: 1, pageSize: 10 }).then(res => {
      if (res.data) {
        this.setState({
          dataNewsList: res.data
        })
      }
    }).then(()=>{

          http.post('/wx/index', { page_path: '/pages/index/index' }).then(res => {
            console.log('==>',res);
          })

    })


  }

  handleClick = value => {
    this.setState({
      current: value
    })
  }
  handleGrid = (item, index) => {

    const { apisStore } = this.props
    console.log('=%%%=', apisStore.sessionid);

    apisStore.updateHome()

    console.log(item.url, index);
    const url = item.url
    if (index == 0 || index == 2) {
      Taro.switchTab({ url })
    } else {
      Taro.navigateTo({ url })
    }

    // 跳转到目的页面，打开新页面
    // Taro.navigateTo({
    //   url: '/pages/details/index'
    // })

    // // 跳转到目的页面，在当前页面打开
    // Taro.redirectTo({
    //   url: '/pages/user/index'
    // })
    // Taro.switchTab('/pages/user/index').then(()=>{

    // })

  }



  render() {
    const { apisStore: { banner, grid } } = this.props
    const { tabList, dataNewsList } = this.state
    return (
      <View className='wrap'>



        <MySwiper banner={banner} />

        <AtGrid hasBorder={false} data={grid} onClick={this.handleGrid} />

        <AtDivider content='活动预告' className='myDivider' lineColor='#855498' fontColor='#666666' />

        <MySwiper banner={banner} />

        <AtDivider content='智慧学堂' className='myDivider' lineColor='#855498' fontColor='#666666' />

        <MySwiper banner={banner} />

        <View className='u-title'>新闻资讯</View>

        <AtTabs current={this.state.current} swipeable={false} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane className='wrap-top' current={this.state.current} index={0}>
            <NewsList dataList={dataNewsList} />
          </AtTabsPane>
          <AtTabsPane className='wrap-top' current={this.state.current} index={1}>
            <ImagesList dataList={dataNewsList} />
          </AtTabsPane>
          <AtTabsPane className='wrap-top' current={this.state.current} index={2}>
            <NewsList2 dataList={dataNewsList} />
          </AtTabsPane>
        </AtTabs>

      </View>
    )
  }
}

export default Home

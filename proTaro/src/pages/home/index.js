import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtGrid, AtDivider  } from 'taro-ui'
import MySwiper from '../../components/MySwiper'
import NewsList from '../../components/MyList/newsList'
import ImagesList from '../../components/MyList/imagesList'
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
      }]
    }
  }
  config = {
    navigationBarTitleText: '旗袍文化促进会'
  }

  componentWillMount() {
    const { apisStore } = this.props
    apisStore.updateHome()
  }

  handleClick = value => {
    this.setState({
      current: value
    })
  }
  handleGrid = (item, index) => {
    console.log(item.url,index );
    const url = item.url
    if(index == 0 || index == 2){
      Taro.switchTab({url})
    } else {
      Taro.navigateTo({url})
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

  render () {
    const { apisStore: { banner, grid } } = this.props
    const { tabList } = this.state
    return (
      <View className='wrap'>

          <MySwiper banner={banner} />



        <AtGrid hasBorder={false} data={grid} onClick={this.handleGrid} />

        <AtDivider className='myDivider' lineColor='#855498' fontColor='#666666' content='活动预告' />

        <MySwiper banner={banner} />

        <AtDivider className='myDivider' lineColor='#855498' fontColor='#666666' content='智慧学堂' />

        <MySwiper banner={banner} />

        <View>新闻资讯</View>

        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >

{
  banner.map((item, index)=>(
    <NewsList key={index} />
  ))
}


          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <ImagesList />
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>

{
  banner.map((item, index)=>(
    <NewsList key={index} />
  ))
}

          </AtTabsPane>
        </AtTabs>

      </View>
    )
  }
}

export default Home

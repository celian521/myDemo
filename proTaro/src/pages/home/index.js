import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtGrid, AtDivider  } from 'taro-ui'
import MySwiper from '../../components/MySwiper'
import MyList from '../../components/MyList'
import './index.scss'

@inject('apisStore')
@observer
class Home extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }
  config = {
    navigationBarTitleText: '旗袍协会'
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
    if(index == 0 ){
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
    const { apisStore: { banner, grid, tabList } } = this.props
    return (
      <View>

        <MySwiper banner={banner} />

        <AtGrid hasBorder={false} data={grid} onClick={this.handleGrid} />

        <AtDivider className='myDivider' lineColor='#855498' fontColor='#666666' content='活动预告' />

        <MySwiper banner={banner} />

        <AtDivider className='myDivider' lineColor='#855498' fontColor='#666666' content='智慧学堂' />

        <MySwiper banner={banner} />

        <View>新闻资讯</View>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
<View className='wrap'>
{
  banner.map((item)=>(
    <MyList />
  ))
}
</View>
          
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>

<View className='wrap'>
{
  banner.map((item)=>(
    <MyList />
  ))
}
</View>

          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
<View className='wrap'>
{
  banner.map((item)=>(
    <MyList />
  ))
}
</View> 
          </AtTabsPane>
        </AtTabs>

      </View>
    )
  }
}

export default Home

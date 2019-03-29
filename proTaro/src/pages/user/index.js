import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import MySwiper from '../../components/MySwiper'
import ImagesList from '../../components/MyList/imagesList'
import NewsList from '../../components/MyList/newsList'
import NewsList2 from '../../components/MyList/newsList2'
import './index.scss'

@inject('apisStore')
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      tabList: [{
          title: '关于我们'
        }, {
          title: '加入我们'
        }, {
          title: '会员服务'
        },{
          title: '旗袍时尚'
        }
      ]
    }
  }
  config = {
    navigationBarTitleText: '会员中心'
  }

  componentWillMount() {}


  handleClick = value => {
    this.setState({
      current: value
    })
  }
  render () {
    const { apisStore: { banner } } = this.props
    const { tabList } = this.state

    return (
      <View className='wrap'>
        <MySwiper banner={banner} />


        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane className='wrap-top' current={this.state.current} index={0} >
            <NewsList2 />
          </AtTabsPane>
          <AtTabsPane className='wrap-top' current={this.state.current} index={1}>
            <NewsList />
          </AtTabsPane>
          <AtTabsPane className='wrap-top' current={this.state.current} index={2}>
            <ImagesList />
          </AtTabsPane>
          <AtTabsPane className='wrap-top' current={this.state.current} index={3}>
            <View>
              no more
            </View>
          </AtTabsPane>
        </AtTabs>


      </View>
    )
  }
}

export default Index

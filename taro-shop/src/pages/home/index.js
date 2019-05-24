import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
// import { ProSwiper } from '@/components'

import myRecommend from './recommend.js'

import linkTo from '@/utils/linkTo.js'

import './index.scss'

@inject()
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '商圈小程序',
    enablePullDownRefresh: true
  }

  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
    }
  }
  onPullDownRefresh() {
    Taro.stopPullDownRefresh()
  }

  componentWillMount() {

  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  render() {
    const { current } = this.state
    const tabList = [{ title: '推荐' }, { title: '美食' }, { title: '娱乐' }, { title: '时尚' }, { title: '教育' }, { title: '标签' }, { title: '标签' }, { title: '标签' }, { title: '标签' }]
    return (
      <View>
        <View className='searchBar wrap' onClick={() => { linkTo({ url: '/pages/search/index' }) }}>
          <Text className='at-icon at-icon-search'></Text>
          <Text>请输入关键词搜索</Text>
        </View>
        <AtTabs
          className='myAtTabs'
          animated={false}
          scroll
          current={current}
          tabList={tabList}
          onClick={this.handleClick.bind(this)}
        > </AtTabs>
        { current === 0 ? <myRecommend /> : <View style='padding: 100px 50px;text-align: center;'>{ current }</View> }
      </View>
    )
  }
}

export default Index

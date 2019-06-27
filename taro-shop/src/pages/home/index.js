import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, Text } from '@tarojs/components'
import { AtTabs } from 'taro-ui'
import { ItemList } from '@/components'

import MyHome from './home.js' // 首页推荐
import apis from '@/apis'
import linkTo from '@/utils/linkTo.js'

import './index.scss'

// @inject()
// @observer
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
    console.log('home')
    apis.getList({}).then((({ data }) => {
      console.log('getlist', data)
    }))
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
        <View className='searchBar' onClick={() => { linkTo({ url: '/pages/search/index' }) }}>
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
        { current === 0 ? <MyHome /> : <ItemList type='store' data={[1, 2, 3, 4, 5, 6, 7, 8, 15, 9]} /> }
      </View>
    )
  }
}

export default Index

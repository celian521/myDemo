import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { ScrollList } from '@components'
import './index.scss'

@inject('globalStore')
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
    };
  }
  config = {
    navigationBarTitleText: '党建公益'
  }

  render() {
    return (
      <View className='wrap'>
        <View className='u-title'>党建</View>
        <ScrollList type='news' newsType={1} loadMore={false} ref={node => this.ScrollList0 = node} />
        <View className='u-title'>慈善公益</View>
        <ScrollList type='news' newsType={1} loadMore={false} ref={node => this.ScrollList1 = node} />
      </View>
    )
  }
}

export default Index

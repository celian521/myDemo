import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { ScrollList } from '@components'
import './index.scss'

@inject('globalStore')
@observer
class List extends Component {
  config = {
    navigationBarTitleText: '旗袍文化'
  }
  onReachBottom() {
    this.ScrollList.load()
  }
  render() {
    // /pages/newsList/index?type=news2&title=精彩回顾&newsTypeId=1
    const { newsTypeId, title, type } = this.$router.params
    title && Taro.setNavigationBarTitle({ title })
    return (
      <View className='wrap'>
        <ScrollList
          type={type}
          newsType={parseInt(newsTypeId)}
          ref={node => this.ScrollList = node}
        />
      </View>
    )
  }
}

export default List

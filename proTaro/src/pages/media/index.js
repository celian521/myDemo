import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtSegmentedControl } from 'taro-ui'
import { ItemList, MySwiper } from '@components'
import './index.scss'

@inject('globalStore')
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }
  config = {
    navigationBarTitleText: '媒体事业'
  }

  handleClick = value => {
    this.setState({
      current: value
    })
  }

  render() {
    // const { globalStore: { } } = this.props
    return (
      <View className='wrap'>
        <View className='header-nav'>
          <AtSegmentedControl
            values={['视频', '电子会刊', '媒介专访', '公众号']}
            fontSize={36}
            onClick={this.handleClick.bind(this)}
            current={this.state.current}
          />
        </View>
        <View className='top-blank'></View>
        {
          this.state.current === 0
            ? <ItemList type='news2' />
            : null
        }
        {
          this.state.current === 1
            ? <ItemList type='card2' />
            : null
        }
        {
          this.state.current === 2
            ? <ItemList  type='card2' />
            : null
        }
        {
          this.state.current === 3
            ? <ItemList  type='news3' />
            : null
        }
      </View>
    )
  }
}

export default Index

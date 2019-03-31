import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtSegmentedControl } from 'taro-ui'
import { NewsList, ImagesList, NewsList2, MySwiper} from '@components'
import './index.scss'

@inject('apisStore')
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

  render () {
    // const { apisStore: { } } = this.props

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
            ? <ImagesList />
            : null
          }
          {
            this.state.current === 1
            ? <NewsList />
            : null
          }
          {
            this.state.current === 2
            ? <ImagesList />
            : null
          }
          {
            this.state.current === 3
            ? <NewsList2 />
            : null
          }
      </View>
    )
  }
}

export default Index

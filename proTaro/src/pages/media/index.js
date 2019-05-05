import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtSegmentedControl } from 'taro-ui'
import { ScrollList, MySwiper } from '@components'
import './index.scss'

@inject('globalStore')
@observer
class Media extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }

  config = {
    navigationBarTitleText: '媒体事业'
  }
  onShareAppMessage(res) {}
  onReachBottom() {
    switch (this.state.current) {
      case 0: this.ScrollList0.load()
        break;
      case 1: this.ScrollList1.load()
        break;
      case 2: this.ScrollList2.load()
        break;
      case 3: this.ScrollList3.load()
        break;
      default:
        break;
    }
  }
  handleClick = value => {
    this.setState({
      current: value
    })
  }

  render() {
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
            ? <ScrollList type='news2' newsType={25} ref={node => this.ScrollList0 = node} />
            : null
        }
        {
          this.state.current === 1
            ? <ScrollList type='card2' newsType={26} ref={node => this.ScrollList1 = node} />
            : null
        }
        {
          this.state.current === 2
            ? <ScrollList type='card2' newsType={23} ref={node => this.ScrollList2 = node} />
            : null
        }
        {
          this.state.current === 3
            ? <ScrollList type='news3' newsType={35} ref={node => this.ScrollList3 = node} />
            : null
        }
      </View>
    )
  }
}

export default Media

import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { ScrollList, MySwiper } from '@components'
import apis from '@apis'
import './index.scss'

@inject('globalStore')
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      dataBanner: [],
      tabList: [{
        title: '分支机构简介'
      }, {
        title: '分会风采'
      }
      ]
    }
  }
  config = {
    navigationBarTitleText: '分支机构'
  }
  componentWillMount() {
    this.fetchBanner()
  }
  /**
   * 获取数据
   */
  fetchBanner = () => {
    apis.getPage({ page_path: this.$router.path }).then(({ data }) => {
      this.setState({
        dataBanner: data[1]
      })
    })
  }
  onReachBottom() {
    switch (this.state.current) {
      case 0: this.ScrollList0.load()
        break;
      case 1: this.ScrollList1.load()
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
    const { tabList, dataBanner } = this.state
    return (
      <View className='wrap'>
        <MySwiper banner={dataBanner} />
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane className='wrap-top' current={this.state.current} index={0} >
            <ScrollList type='news2' newsType={1} ref={node => this.ScrollList0 = node} />
          </AtTabsPane>
          <AtTabsPane className='wrap-top' current={this.state.current} index={1}>
            <ScrollList type='news2' newsType={1} ref={node => this.ScrollList1 = node} />
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Index

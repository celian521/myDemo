import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtButton, AtGrid, AtCard, AtSegmentedControl  } from 'taro-ui'
import MySwiper from '../../components/MySwiper'
import MyDivider from '../../components/MyDivider'
import './index.scss'

@inject('apisStore')
@observer
class Home extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      current2: 0
    };
  }
  config = {
    navigationBarTitleText: '旗袍协会'
  }


  componentWillMount() {
    const { apisStore } = this.props
    apisStore.updateHome()
  }



  handleClick (value) {
    this.setState({
      current: value
    })
  }

  handleClick2 (value) {
    this.setState({
      current2: value
    })
  }

  render () {
    const { apisStore: { banner, grid, tabList } } = this.props
    return (
      <View>
        <MySwiper banner={banner} />
        <AtGrid hasBorder={false} data={grid} />
        <MyDivider />
        <View>
          <AtSegmentedControl
            values={['标签页1', '标签页2', '标签页3']}
            onClick={this.handleClick2.bind(this)}
            current={this.state.current2}
          />
          {
            this.state.current2 === 0
            ? <View className='tab-content'>标签1的内容</View>
            : null
          }
          {
            this.state.current2 === 1
            ? <View className='tab-content'>标签2的内容</View>
            : null
          }
          {
            this.state.current2 === 2
            ? <View className='tab-content'>标签3的内容</View>
            : null
          }
          <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
            <AtTabsPane current={this.state.current} index={0} >
              <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1}>
              <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={2}>
              <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
            </AtTabsPane>
          </AtTabs>

        </View>
      </View>
    )
  }
}

export default Home

import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtButton } from 'taro-ui'
import MySwiper from '../../components/MySwiper'
import './index.scss'

class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }
  config = {
    navigationBarTitleText: '旗袍协会'
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  render () {
    const banner = [{
      image_src: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4249805835,427622649&fm=173&app=25&f=JPEG?w=218&h=146&s=26809C4C163A159ED348B4A203006011'
    }, {
      image_src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3795951050,2700167199&fm=173&app=25&f=JPEG?w=218&h=146&s=82A041A01EB2019496B0F89A03006081'
    }]
    const {} = this.props
    console.log(this.props);

    const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
    return (
      <View className='index'>

        <MySwiper banner={banner} home />

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
    )
  }
}

export default Index

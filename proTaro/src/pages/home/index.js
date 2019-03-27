import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtButton, AtGrid, AtCard, AtSegmentedControl  } from 'taro-ui'
import MySwiper from '../../components/MySwiper'
import './index.scss'

class Index extends Component {
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
    const banner = [{
      image_src: 'https://dummyimage.com/750x400/033/fff'
    }, {
      image_src: 'https://dummyimage.com/750x400/030/f0f'
    }]
    const {} = this.props
    console.log(this.props);

    const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
    return (
      <View className='index'>

        <MySwiper banner={banner} home />
        <AtGrid data={
  [
    {
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
      value: '领取中心'
    },
    {
      image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
      value: '找折扣'
    },
    {
      image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
      value: '领会员'
    },
    {
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
      value: '新品首发'
    },
    {
      image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
      value: '领京豆'
    },
    {
      image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
      value: '手机馆'
    }
  ]
}
        />

<AtCard
  note='小Tips'
  extra='额外信息'
  title='这是个标题'
  thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
>
  这也是内容区 可以随意定义功能
</AtCard>

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
    )
  }
}

export default Index

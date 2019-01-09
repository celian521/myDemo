import { View, Text } from '@tarojs/components';
import { inject, observer } from '@tarojs/mobx';
import Taro, { Component } from '@tarojs/taro';
import { AtList, AtListItem, AtTabBar, AtSwipeAction  } from 'taro-ui';


import './index.scss'

// @inject(({nodeStore, counterStore, userStore})=>({
//   // num: nodeStore.number,
//   // add: nodeStore.increase,
//   // del: nodeStore.decrease,
//   // kk: nodeStore.kk.a,
//   // ackk: nodeStore.ackk,
//   // name: counterStore.name,
//   // userName: userStore.userName
// }))

@observer
class Index extends Component {
  config = {
    navigationBarTitleText: '=首页='
  }
  constructor (props) {
    super(props);
    this.state = {
      current: 0
    }
  }
  handleClick = path => {
    // console.log(v)
    // 跳转到目的页面，在当前页面打开
    Taro.navigateTo({
      url: path
    })
  }
  handleTabBar = e => {
    console.log(e);
    // this.state.current
    this.setState({current: e})
    // this.setState({temperature: e.target.value});
  }
  gotoPanel = e => {
    const { id } = e.currentTarget.dataset

    // Taro.navigateTo({
    //   url: `/pages/panel/index?id=${id.toLowerCase()}`
    // })
  }
  render () {
    return (
      <View>

        <Text>text</Text>

        <AtList>
          <AtListItem title='DEMO' onClick={this.handleClick.bind(this, '/pages/demo/index?id=2&type=test')} />

          <AtListItem title='EMIT' onClick={this.handleClick.bind(this, '/pages/emit/index')} />

          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' extraText='详细信息' />
          <AtListItem title='禁用状态' disabled extraText='详细信息' />
          <AtListItem
            arrow='right'
            note='描述信息'
            title='标题文字标题文字标题文字标题文字标题文字'
            extraText='详细信息详细信息详细信息详细信息'
          />
        </AtList>
        <View data-id={52} onClick={this.gotoPanel}> gotoPanel  </View>

         <AtSwipeAction options={[
            {
              text: '取消',
              style: {
                backgroundColor: '#6190E8'
              }
            },
            {
              text: '确认',
              style: {
                backgroundColor: '#FF4949'
              }
            }
          ]}
         >
          <View className='normal'>AtSwipeAction 一般使用场景</View>
        </AtSwipeAction>
       <AtSwipeAction options={[
            {
              text: '取消',
              style: {
                backgroundColor: '#6190E8'
              }
            },
            {
              text: '确认',
              style: {
                backgroundColor: '#FF4949'
              }
            }
          ]}
       >
          <View className='normal'>AtSwipeAction 一般使用场景</View>
        </AtSwipeAction>

        <AtTabBar
          fixed
          tabList={[
            { title: '事项', iconType: 'bullet-list', text: 'new' },
            { title: '拍照', iconType: 'camera' },
            { title: '文件', iconType: 'folder', text: '100', max: '99' }
          ]}
          onClick={this.handleTabBar.bind(this)}
          current={this.state.current}
        />

      </View>
    )
  }
}

export default Index

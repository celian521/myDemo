import Taro, { Component } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
// import { observer, inject } from '@tarojs/mobx'

// import TplDemo from '../../components/template';


import './index.scss'

// @inject(({nodeStore})=>({
//   tplData: nodeStore.tplData,
// }))

// @observer
class DemoIndex extends Component {
  constructor (props) {
    super(props);
    // this.state = {
    //   current: 0
    // }
  }
  config = {
    navigationBarTitleText: '模板'
  }
  componentWillMount() {
    // console.log(this.$router)
  }
  linkfun = url => {

    // const param = { url: path }
    // console.log('ekk',e,v);
    // const u = e.currentTarget.dataset.eTapAA
    Taro.navigateTo({
      url
    })

  }
  render () {
    return (
      <View>
        <View onClick={this.linkfun.bind(this,'/pages/index/index')}>home</View>
        <View onClick={this.linkfun.bind(this,'/pages/demo/index?id=3&type=test')}>007</View>
        <View onClick={this.linkfun.bind(this,'/pages/demo/index?id=13&type=tkdd')}>002</View>
        <View>new =idsss {this.$router.params.id} = </View>
        <View> =idsss {this.$router.params.type} = </View>
      </View>
    )
  }
}

export default DemoIndex

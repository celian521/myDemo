import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import A from './A'
import B from './B'
import C from './C'
import D from './D'

export default class EmitDemo extends Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }
  config = {
    navigationBarTitleText: 'EMIT'
  }
  componentWillMount() {
    //console.log(this.$router)
  }
  render () {
    return (
      <View>
        <A />
        <B />
        <C />
        <D />
        emit demo
      </View>
    )
  }
}

import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import b from './b'

@b
class Aa extends Component {
  componentWillMount() {
    console.log('my is 000')
}
  render() {
    // const { name } = this.props.nodeData
    return (
      <View>
        ye={this.props.ye}
        <Text>THIS IS a=</Text>
        {/* {this.props.children} */}
      </View>
      );
  }
}

export default Aa

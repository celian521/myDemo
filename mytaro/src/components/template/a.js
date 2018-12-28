import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components'

class A extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name } = this.props.nodeData
    return (
      <View>
        <Text>THIS IS A
          {name}
        </Text>
        {this.props.children}
      </View>
      );
  }
}


export default A

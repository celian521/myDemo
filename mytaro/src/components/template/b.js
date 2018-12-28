import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components'

class B extends Component {
  render() {
    const { name } = this.props.nodeData
    return (
      <View>
        <Text>THIS IS B
          {name}
        </Text>
        {this.props.children}
      </View>
      );
  }
}

export default B

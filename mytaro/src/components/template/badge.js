import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components'

import { AtBadge, AtButton } from 'taro-ui'

class Badge extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, num } = this.props.nodeData
    return (
      <View>
        <AtBadge value={num} maxValue={99}>
            <AtButton size='small'>{name}</AtButton>
        </AtBadge>
        {this.props.children}
      </View>
      );
  }
}


export default Badge

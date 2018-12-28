import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components'

import Tpl from './base';
import Myself from '.';

class Base extends Component {
  render() {
    return (
      <View>
        {
          this.props.nodeData.map((item, index) => {
            const Mycomponent = Tpl[item.component]
            return <Mycomponent nodeData={item} key={index}>
             { item.children && <Myself nodeData={item.children} /> }
              </Mycomponent>
          })
        }
      </View>
      );
  }
}

export default Base

import Taro, { Component } from '@tarojs/taro'
import { AtDivider } from 'taro-ui'
import './index.scss';

export default class MyList extends Component {
  render() {
    return (
      <AtDivider lineColor='#855498' fontColor="#666666" content='分割线' />
    )
  }
}


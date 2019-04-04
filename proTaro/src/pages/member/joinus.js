import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtSegmentedControl,  AtForm, AtInput, AtButton    } from 'taro-ui'
import FromJoinusUser from './fromJoinusUser'
import FromJoinusCompany from './fromJoinusCompany'
import './index.scss';

export default class JoinUS extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  render() {
    return (
      <View>
       <AtSegmentedControl
         values={['个人', '企业']}
         onClick={this.handleClick.bind(this)}
         current={this.state.current}
       />
      {
        this.state.current === 0
        ? <FromJoinusUser />
        : null
      }
      {
        this.state.current === 1
        ? <FromJoinusCompany />
        : null
      }
      </View>
    )
  }
}

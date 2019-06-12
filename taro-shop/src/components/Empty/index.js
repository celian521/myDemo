/**
 * Empty 空状态
 */
import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import PropTypes from 'prop-types';
import './index.scss';

export default class Empty extends Component {
  static propTypes = {
    type: PropTypes.string,
    text: PropTypes.string
  };
  static defaultProps = {
    type: '',
    text: '暂无数据'
  };
  render() {
    const { type, text } = this.props;
    return (
      <View className={`empty ${type}`}>{ text }</View>
    )
  }
}


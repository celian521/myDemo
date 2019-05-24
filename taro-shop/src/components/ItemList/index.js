
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';

import Item from './Item'
import ItemGoods from './ItemGoods'

export default class List extends Component {
  static propTypes = {
    data: PropTypes.array,
    type: PropTypes.string
  };

  static defaultProps = {
    data: [],
    type: 'item',
  };

  render() {
    const { type, data } = this.props
    return (
      <View>
        { type === 'item' ? <Item data={data} /> : null }
        { type === 'goods' ? <ItemGoods data={data} /> : null }
      </View>
    )
  }
}


import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';

import ItemActivity from './ItemActivity'
import ItemGoods from './ItemGoods'
import ItemStore from './ItemStore'
import ItemCoupon from './ItemCoupon'

export default class List extends Component {
  static propTypes = {
    data: PropTypes.array,
    type: PropTypes.string
  };

  static defaultProps = {
    data: [],
    type: 'activity',
  };

  render() {
    const { type, data } = this.props
    return (
      <View>
        { type === 'activity' ? <ItemActivity data={data} /> : null }
        { type === 'goods' ? <ItemGoods data={data} /> : null }
        { type === 'store' ? <ItemStore data={data} /> : null }
        { type === 'coupon' ? <ItemCoupon data={data} /> : null }
      </View>
    )
  }
}

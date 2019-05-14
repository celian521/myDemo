/**
 *  套餐卡
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

export default class PkgCard extends Component {
  static propTypes = {
    data: PropTypes.array
  };
  static defaultProps = {
    data: []
  };

  constructor() {
    super(...arguments);
    this.state = {
      activeId: null,
    }
  }

  handleClick = item => {
    this.props.onChange(item)
    this.setState({
      activeId: item.cardid
    })
  }
  render() {
    const { data } = this.props
    const { activeId } = this.state
    return (
      <View>
        {
          data.map(item => {
            const price = item.price/100
            const info = item.time_len/24/60/30 + '个月会员'
            return (
              <View
                key={item.id}
                className={`card-block ${activeId === null || (activeId == item.cardid ? 'active' : 'disable')}`}
                onClick={this.handleClick.bind(this, item)}
                style={{ background: `url("${item.img_url}") no-repeat`, backgroundSize: '100% auto' }}
              >
                <View>
                </View>
                <View>
                  <Text className='card-priceUnit'>￥</Text>
                  <Text className='card-price'>{ price }</Text>
                  <View className='card-info'>{ info }</View>
                  <Text className='card-type'>{ item.cardname }</Text>
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }
}

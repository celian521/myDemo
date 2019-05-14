/**
 *  欢唱套餐
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Text, RadioGroup, Radio, Label } from '@tarojs/components';
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

  handelRadio = e => {
    const id = parseInt(e.detail.value)
    const data = this.props.data
    for (let item of data) {
      if (item.packet_id === id) this.props.onChange(item)
    }
    this.setState({
      activeId: id
    })
  }
  render() {
    const { data } = this.props
    const { activeId } = this.state
    return (
      <RadioGroup onChange={this.handelRadio} >
        {
          data.map(item => (
            <Label
              for={item.packet_id}
              key={item.packet_id}
              className={`pkg-block ${activeId === null || (activeId == item.packet_id ? 'active' : 'disable')}`}
              style={{ backgroundImage: `url("${item.img_url}")` }}
            >
              <View className='pkg-left'>
                <Text className='pkg-price'>{ item.price/100 }</Text>
                <Text className='pkg-priceUnit'>元</Text>
                <Text className='pkg-del'>原价{ item.old_price/100 }元</Text>
              </View>
              <View className='pkg-right'>
                <Radio id={item.packet_id} color='#DC5A58' value={item.packet_id} />
              </View>
            </Label>
          ))
        }
      </RadioGroup>
    )
  }
}

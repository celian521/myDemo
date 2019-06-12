/**
 *
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, Text, Image } from '@tarojs/components';
import { AtIcon, AtInputNumber, AtSwipeAction } from 'taro-ui'
import { CheckBox } from '@/components'
// import linkTo from '@/utils/linkTo'
import PropTypes from 'prop-types';
// import './item.scss'

@inject('cartStore')

@observer
class ItemGoods extends Component {
  static options = {
    addGlobalClass: true
  }
  static propTypes = {
    i: PropTypes.number,
    j: PropTypes.number
  };

  static defaultProps = {
    i: 0,
    j: 0
  };
  constructor() {
    super(...arguments)
    this.state = {
    }
  }

  handleChangeNum(num) {
    const { cartStore, i, j } = this.props
    cartStore.changeNumber(i, j, num)
  }
  handleCheckGoods() {
    const { cartStore, i, j } = this.props
    cartStore.checkGoods(i, j)
  }

  render() {
    const { cartStore, i, j } = this.props
    const { cartList } = cartStore
    const store = cartList[i] || []
    const goodsList = store.goodsList || []
    const {
      thumb = 'https://dummyimage.com/350x350/eee/999',
      name = '',
      sku = '',
      num = 1,
      maxNum = 100,
      price = '0',
      state = false
    } = goodsList[j] || {}
    return (
      <View className='card-body'>
        <View className='item'>
          <View className='item-radio' >
            <CheckBox checked={state} onclick={this.handleCheckGoods}></CheckBox>
          </View>
          <View className='item-thumb'>
            <Image src={thumb} />
          </View>
          <View className='item-content'>
            <View className='title'>{ name }</View>
            <View className='sku'>
              { sku }
              <AtIcon value='chevron-down' size='20' color='#ccc'></AtIcon>
            </View>
            <View className='item-bottom'>
              <View className='price'>¥{ num * price / 100 }</View>
              <View>
                <AtInputNumber
                  min={1}
                  max={maxNum}
                  step={1}
                  value={num}
                  onChange={this.handleChangeNum.bind(this)}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}


export default ItemGoods

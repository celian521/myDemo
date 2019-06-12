/**
 *
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, Text } from '@tarojs/components';
import { AtIcon } from 'taro-ui'
import { CheckBox } from '@/components'
// import ItemGoods from './ItemGoods.js'
// import linkTo from '@/utils/linkTo'
import PropTypes from 'prop-types';
// import './item.scss'

@inject('cartStore')

@observer
class ItemStore extends Component {
  static options = {
    addGlobalClass: true
  }
  static propTypes = {
    i: PropTypes.number
  };

  static defaultProps = {
    i: 0
  };
  constructor() {
    super(...arguments)
    this.state = {
    }
  }
  handerLink = id => {
    console.log('handerLink', id)
    // const url = `/pages/goods/index?id=${id}`
    // linkTo({ url })
  }

  handleCheckStroe() {
    const { cartStore, i } = this.props
    cartStore.checkStroe(i)
  }

  render() {
    const { i, cartStore } = this.props
    const { cartList } = cartStore
    const storeList = cartList || []
    const { title='', state=false } = storeList[i] || {}
    return (
      <View className='card-header'>
        <View className='header-title'>
          <View className='radio' >
            <CheckBox checked={state} onclick={this.handleCheckStroe} />
          </View>
          <Text>{ title }</Text>
          <AtIcon value='chevron-right' size='16' color='#ccc'></AtIcon>
        </View>
        <View className='header-tool'>
          <Text>领券</Text>
        </View>
      </View>
    )
  }
}


export default ItemStore

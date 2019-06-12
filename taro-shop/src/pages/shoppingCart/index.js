/**
 * 购物车
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import { View, Text } from '@tarojs/components'
import { AtButton, AtSwipeAction } from 'taro-ui'
import { Empty, CheckBox } from '@/components'
import classnames from 'classnames'
import ItemStore from './ItemStore.js'
import ItemGoods from './ItemGoods.js'
// import apis from '@/apis'
// import linkTo from '@/utils/linkTo.js'


import './index.scss'
import './item.scss'

@inject('cartStore')

@observer
class ShoppingCart extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      hasEdit: false, // 管理状态切换
    }
  }
  config = {
    backgroundColor: "#f7f7f7",
    navigationBarTitleText: '购物车'
  }
  handleChange(e) {
    console.log(e)
  }
  // 切换管理状态
  handleEdit(e) {
    this.setState({
      hasEdit: e
    })
  }
  // 全选/全不选
  handleCheckAll() {
    const { cartStore } = this.props
    cartStore.checkAll()
  }

  handleDelete(i, j, e) {
    const { cartStore } = this.props
    cartStore.delete(i, j)
  }

  handleDeleteLot() {
    const { cartStore } = this.props
    cartStore.deleteLot()
  }

  addCart() {
    const { cartStore } = this.props
    cartStore.addCart('8')
  }

  render() {
    const { hasEdit } = this.state
    const { cartStore } = this.props
    const { checkState, cartList = [], total } = cartStore


    // const datas = cartStore.myCartInfo()
    // const totelPrice = 88.00

    return (
      <View>
        <View className={classnames('header', { 'on': !!total.numStore })}>
          <View className=''>
            <Text className='icon icon-gps'></Text>
            <Text onClick={this.addCart}>您所在商城：番禺永旺商城</Text>
          </View>
          {
            hasEdit ?
              <View className='btn active' onClick={this.handleEdit.bind(this, false)}>完成</View>
              :
              <View className='btn' onClick={this.handleEdit.bind(this, true)}>管理</View>
          }
        </View>
        {
          !total.numStore ?
            <Empty text='购物车空空如也，去逛逛吧~' />
            :
            <View className='cart-block'>
              { cartList.map((item, i) => (
                <View key={item.id} className='item-card'>
                  <ItemStore i={i} />
                  {
                    item.goodsList.map((goods, j) =>
                      (
                        <AtSwipeAction key={goods.id} autoClose options={[
                          {
                            text: '删除',
                            style: {
                              backgroundColor: '#DC5A58'
                            }
                          }
                        ]}
                          onClick={this.handleDelete.bind(this, i, j)}
                        >
                          <ItemGoods i={i} j={j} />
                        </AtSwipeAction>
                      ))
                  }
                </View>
              )) }
            </View>
        }



        <View className={classnames('footer', { 'on': !!total.numStore })}>
          <View className='radio'>
            <CheckBox checked={checkState} onClick={this.handleCheckAll.bind(this)}>全选</CheckBox>
          </View>
          {
            !hasEdit && <View className='totel'>合计：<Text className='price'>¥{ total.price }</Text></View>
          }
          {
            !hasEdit && <View className='toPay'>去结算</View>
          }
          {
            hasEdit && <View className='delete' onClick={this.handleDeleteLot}>
              <AtButton type='primary' circle>删除</AtButton>
            </View>
          }
        </View>

      </View>
    )
  }
}

export default ShoppingCart

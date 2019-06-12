/**
 *  @Title   购物车
 *  @Auther  Stephen WU
 *  @Des     描述
 *  @Time    2019
 */
import Taro from '@tarojs/taro'
import { observable } from 'mobx'

const cartStore = observable({
  checkState: false, // 全选/全不选
  // price: 10,
  cartList: [
    {
      id: '5',
      state: false,
      title: '九毛九山西面馆(永旺店)',
      goodsList: [{
        id: '85',
        thumb: 'https://dummyimage.com/350x350/eee/999',
        name: '铁锅干香焖面',
        sku: '黑色；牛奶味；90ml',
        num: '2',
        maxNum: 20,
        price: 8879,
        state: false
      },
      {
        id: '84',
        thumb: 'https://dummyimage.com/350x350/eee/999',
        name: '番茄牛腩面',
        sku: '黑色；牛奶味；90ml',
        num: '8',
        maxNum: 10,
        price: 8879,
        state: false
      }]
    }, {
      id: '8',
      state: false,
      title: '点都德(永旺店)',
      goodsList: [{
        id: '25',
        thumb: 'https://dummyimage.com/350x350/eee/999',
        name: '法国香薰界传奇女王',
        sku: '黑色；牛奶味；90ml',
        num: '2',
        price: 8879,
        state: false
      },
      {
        id: '24',
        thumb: 'https://dummyimage.com/350x350/eee/999',
        name: 'Ann Steeger同名香薰',
        sku: '黑色；牛奶味；90ml',
        num: '8',
        price: 8879,
        state: false
      },
      {
        id: '284',
        thumb: 'https://dummyimage.com/350x350/eee/999',
        name: '武夷山红茶正山小种',
        sku: '黑色；牛奶味；90ml',
        num: '8',
        price: 8879,
        state: false
      },
      {
        id: '854',
        thumb: 'https://dummyimage.com/350x350/eee/999',
        name: '海盐焦糖牛奶硬糖',
        sku: '黑色；牛奶味；90ml',
        num: '8',
        price: 8879,
        state: false
      }]
    }
  ],

  // 全选/全不选
  checkAll() {
    const state = !this.checkState
    this.checkState = state
    for (let item of this.cartList) {
      item.state = state
      for (let goods of item.goodsList) {
        goods.state = state
      }
    }
  },
  checkStroe(i) {
    const state = !this.cartList[i].state
    this.cartList[i].state = state
    for (let item of this.cartList[i].goodsList) {
      item.state = state
    }
    if (!state) {
      this.checkState = false
    }
  },
  checkGoods(i, j) {
    const state = !this.cartList[i].goodsList[j].state
    this.cartList[i].goodsList[j].state = state
    if (!state) {
      this.checkState = false
      this.cartList[i].state = false
    }
  },

  // 修改商品数量
  changeNumber(i, j, num) {
    this.cartList[i].goodsList[j].num = num
  },
  // 添加购物车
  addCart(id) {
    // const obj = {
    //   store: {
    //     id: '5',
    //     title: '九毛九山西面馆(永旺店)'
    //   },
    //   goods: {
    //     id: '85',
    //     thumb: 'https://dummyimage.com/350x350/eee/999',
    //     name: '铁锅干香焖面',
    //     sku: '黑色；牛奶味；90ml',
    //     num: '2',
    //     maxNum: 20,
    //     price: 8879,
    //     state: false
    //   }
    // }

    // let i = this.cartList.findIndex((item)=>{
    //   return item.id === id
    // })
    // let j = -1;
    // if(i!==-1){
    //   j = this.cartList[i].goodsList.findIndex((item)=>{
    //     return item.id === id
    //   })
    // }else{

    // }

    // console.log('i', i, j)

  },
  // 删除
  delete(i, j) {
    let data = this.cartList[i].goodsList
    if (data.length == 1) {
      this.cartList.splice(i, 1)
    } else {
      data.splice(j, 1)
    }
  },
  // 批量删除
  deleteLot() {
    let newCartList = []
    this.cartList.map((item) => {
      let goodsList = []
      item.goodsList.map((goods) => {
        if (!goods.state) goodsList.push(goods)
      })
      if (goodsList.length > 0) newCartList.push({ ...item, goodsList })
    })
    this.cartList = newCartList
  },
  // 合计价格
  get total() {
    let price = 0,
      numStore = 0, // 店数量
      numAll = 0, // 总数量
      num = 0  // 数量
    for (let item of this.cartList) {
      numStore++
      for (let goods of item.goodsList) {
        if (goods.state) {
          price = price + goods.num * goods.price
          numAll = numAll + parseInt(goods.num)
          num++
        }
      }
    }
    return { price: price / 100, num, numAll, numStore }
  },
  // set total(total) {
  //   this.price = total.price / 100 // 从 total 中推导出 price
  // },
})


// @computed get counterStore.total = function() {
//   return 5555
// }


export default cartStore

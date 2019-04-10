/**
 *  @Title
 *  @Auther  Stephen WU
 *  @Des     描述
 *  @Time    2019
 */
import Taro from '@tarojs/taro'
import { observable } from 'mobx'

const globalStore = observable({
  sessionId: '',
  login(code) {
    this.sessionId = code
    Taro.switchTab({
      url: '/pages/home/index'
    })
  }
})

export default globalStore

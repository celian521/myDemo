 /**
  *  @Title
  *  @Auther  Stephen WU
  *  @Des     描述
  *  @Time    2019
  */
import Taro from '@tarojs/taro'
import { observable } from 'mobx'
import mock from '../mock'

const globalStore = observable({
  sessionId: '',
  banner: mock.banner || [],
  grid: mock.grid || [],
  tabList: mock.tabList || [],
  details: mock.details || [],
  dataNewsList: [],

  login(code) {
    this.sessionId = code
    Taro.switchTab({
      url: '/pages/home/index'
    })
  },

  getDetails(id) {
    return this.details.find(item => item.id == id)
  },

  updateHome() {
  }

})

export default globalStore

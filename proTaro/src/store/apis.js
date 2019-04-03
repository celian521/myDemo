 /**
  *  @Title
  *  @Auther  Stephen WU
  *  @Des     描述
  *  @Time    2019
  */
import Taro from '@tarojs/taro'
import { observable } from 'mobx'
import http from '@utils/http'
import mock from '../mock'

const apisStore = observable({
  sessionId: '',
  banner: mock.banner || [],
  grid: mock.grid || [],
  tabList: mock.tabList || [],
  details: mock.details || [],
  dataNewsList: [],
  login(code) {
    http.post('/weixin/getUserInfo', { company_id: 1, code }).then(res => {
      this.sessionId = res.data.session_id
      Taro.switchTab({
        url: '/pages/home/index'
      })
    })
  },

  getDetails(id) {
    return this.details.find(item => item.id == id)
  },

  updateHome() {
  }

})

export default apisStore

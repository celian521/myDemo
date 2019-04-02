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
    // setTimeout(() => {


          http.post('/wx/newsList', { news_type:1, page:1, pageSize:10 }).then(res => {
              console.log(res);
          })

          // http.post('/wx/newsList', { news_type:2, page:1, pageSize:10 }).then(res => {
          //   console.log(res);
          // })

          http.post('/wx/index', { page_path: '/pages/index/index' }).then(res => {
            console.log(res);
          })

    // }, 500);

  },
})

export default apisStore

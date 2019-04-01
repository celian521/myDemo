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
  session_id: '',
  banner: mock.banner || [],
  grid: mock.grid || [],
  tabList: mock.tabList || [],
  details: mock.details || [],
  // init() {
  //   console.log('init');
  //   let self = this
  //   Taro.login({
  //     success(res) {
  //       if (res.code) {
  //         // 用户登录获取session信息接口
  //         http.post('/weixin/getUserInfo', { code: res.code, company_id: 1 }).then(ress => {
  //           self.session_id = ress.data.session_id
  //         })
  //       } else {
  //         console.log('登录失败！' + res.errMsg)
  //       }
  //     }
  //   })
  // },
  init() {
    console.log('init');

    http.post('/wx/newsList', { news_type:1, page:1, pageSize:10 }).then(res=>{
      console.log('http:=>', res);
    })

  },
  getDetails(id) {
    return this.details.find(item => item.id == id)
  },
  updateHome() {
    console.log('updatahome');
    // http.get('/wx/newsList', { news_type:1, page:1, pageSize:10 }).then(res => {
    //     console.log(res);
    // })
    // this.banner = mock.banner
  },
})

apisStore.init()

export default apisStore

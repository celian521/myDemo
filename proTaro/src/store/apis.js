 /**
  *  @Title
  *  @Auther  Stephen WU
  *  @Des     描述
  *  @Time    2019
  */
import Taro from '@tarojs/taro'
import { observable } from 'mobx'
import http from '@utils/https'
import mock from '../mock'

const apisStore = observable({
  session_id: '',
  banner: mock.banner || [],
  grid: mock.grid || [],
  tabList: mock.tabList || [],
  details: mock.details || [],
  getDetails(id) {
    return this.details.find(item => item.id == id)
  },
  updateHome() {
    // setTimeout(() => {


          http('/wx/newsList', { news_type:1, page:1, pageSize:10 }).then(res => {
              console.log(res);
          })

          http('/wx/newsList', { news_type:2, page:1, pageSize:10 }).then(res => {
            console.log(res);
          })

          http('/wx/index', { page_path: '/pages/index/index' }).then(res => {
            console.log(res);
          })

    // }, 500);

  },
})

export default apisStore

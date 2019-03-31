 /**
  *  @Title
  *  @Auther  Stephen WU
  *  @Des     描述
  *  @Time    2019
  */
import { observable } from 'mobx'
import http from '../utils/http'
import mock from '../mock'

const apisStore = observable({
  banner: mock.banner || [],
  grid: mock.grid || [],
  tabList: mock.tabList || [],
  details: mock.details || [],
  getDetails(id) {
    return this.details.find(item => item.id == id)
  },
  updateHome() {
    console.log('a+');
    // http.post('/wx/newsList', {session_id:2}).then((e)=>{
    //   console.log('a', e);
    // })
    this.banner = mock.banner
  },
})
export default apisStore

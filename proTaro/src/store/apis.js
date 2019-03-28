 /**
  *  @Title
  *  @Auther  Stephen WU
  *  @Des     描述
  *  @Time    2019
  */
import { observable } from 'mobx'
import http from '../utils/http'
import mock from '../mock'

// console.log("mock", http);

const apisStore = observable({
  banner: [],
  grid: mock.grid || [],
  list: 0,
  updateHome() {
    console.log('aaaaaa');
    this.banner = mock.banner
  },
})
export default apisStore

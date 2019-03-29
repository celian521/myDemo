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
  banner: [],
  grid: mock.grid || [],
  tabList: mock.tabList || [],
  details: mock.details || [],
  getDetails(id) {
    return this.details.find(item => item.id == id)
  },
  updateHome() {
    this.banner = mock.banner
  },
})
export default apisStore

import Taro from '@tarojs/taro'
import http from './http'
import baseUrl from './baseUrl.js'

export default {
  // 用户登录获取session信息接口
  getSession(params) {
    return http.post(baseUrl + '/weixin/getUserInfo', { company_id: 1, ...params })
  },
  // 小程序各页面显示数据接口
  getPage(params) {
    return http.post(baseUrl + '/wx/index', params)
  },
  // 文章资讯接口
  getDetails(params) {
    return http.post(baseUrl + '/wx/news', params)
  },
  // 文章资讯列表接口
  getList(params) {
    return http.post(baseUrl + '/wx/newsList', params)
  },

  // 预约培训提交数据
  postBook(params) {
    return http.post(baseUrl + '/wx/book', params)
  },
  // 加入我们（个人用户）接口
  postJoinusUser(params) {
    return http.post(baseUrl + '/wx/joinusUser', params)
  },
  // 加入我们（企业申请）接口
  postJoinusCompany(params) {
    return http.post(baseUrl + '/wx/joinusCompany', params)
  }
}

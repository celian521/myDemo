import Taro from '@tarojs/taro'
import http from './http'
import baseUrl from './baseUrl.js'

export default {
  // 用户登录获取session信息接口
  getSession(params) {
    return http.post(baseUrl+'/weixin/getUserInfo', { company_id: 1, ...params })
  },
  // 小程序各页面显示数据接口
  getPage(params) {
    return http.post(baseUrl+'/wx/index', params)
  },
  // 文章资讯接口
  getDetails(params) {
    return http.post(baseUrl+'/wx/news', params)
  },
  // 文章资讯列表接口
  getList(params) {
    return http.post(baseUrl+'/wx/newsList', params)
  },

  // 预约培训提交数据
  postBook(params) {
    return http.post(baseUrl+'/wx/book', params)
  },
  // 加入我们（个人用户）接口
  postJoinusUser(params) {
    return http.post(baseUrl+'/wx/joinusUser', params)
  },
  // 加入我们（企业申请）接口
  postJoinusCompany(params) {
    return http.post(baseUrl+'/wx/joinusCompany', params)
  }
}


// "1"资讯文章
// "20"|--旗袍时尚
// "21"|--党建公益
// "22"|--媒体事业
// "23"|--人物专访
// "24"|--学堂撷英
// "25"|--视频
// "26"|--电子会刊
// "2"培训列表
// "12"|--名师介绍
// "14"|--教育培训
// "4"活动策划
// "9"|--活动
// "11"会员中心
// "7"|--会员介绍
// "7"|-----高级会员
// "7"|-----VIP会员
// "7"|-----资深会员

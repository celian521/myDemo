import Taro from '@tarojs/taro'
import http from './http'
import PATH from './baseUrl.js'

/**
 *    eg. 使用案例
 *    import apis from '@/apis'
 *
 *    apis.getCardList({uid:1024, mid:1,catrd_type:1}).then(({data})=>{
 *      console.log(data)
 *    }).catch(err=> console.warn(err));
 *
 */

const { baseUrl, wxapiUrl } = PATH

export default {
  // 获取校园卡列表
  getCardList(params) {
    return http.post(baseUrl + '/school-get-card-list', params)
  },
  // 获取充值记录
  getPayHistoryList(params) {
    return http.post(baseUrl + '/school-get-buy-history', params)
  },
  // 获取套餐列表
  getPkgList(params) {
    return http.post(baseUrl + '/school-get-package-list', params)
  },
  // 获取校园卡用户时长统计
  getStat(params) {
    return http.post(baseUrl + '/school-get-buy-stat', params)
  },
  // 购买套餐
  payPkg(params) {
    return http.post(baseUrl + '/school-buy-package', params)
  },


  // 发起购买卡预支付请求

  // 用户登录
  login(params) {
    return http.post(wxapiUrl + '/audition/login', params)
  },

 // 获取用户消息信息
  getUserInfo(params) {
    return http.post(wxapiUrl + '/user/user_info', params)
  },






}

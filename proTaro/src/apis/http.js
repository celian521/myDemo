/**
 *  @Title   网络请求 interceptor 拦截处理
 *  @Auther  Stephen WU
 *  @Des     描述
 *  @Time    2019
 */

import Taro from '@tarojs/taro'
import store from '../store'

// const baseUrl = 'https://sem.gznewbp.com'
const successCode = '1'
// const API_lOGIN = 'https://sem.gznewbp.com/weixin/getUserInfo'
// 默认参数
const defaultParams = {
  company_id: 3,
  version: '1.0.0',
  service_id: 2
}

const Ajax = (method, url, params) => {
  const session_id = store.globalStore.sessionId || null
  return new Promise((resolve, reject) => {

    if (!session_id && !params.company_id) {
      resolve({})
      Taro.redirectTo({
        url: '/pages/login/index'
      })
    } else {
      Taro.request({
        header: { 'content-type': 'application/json' },
        method: method,
        url: url,
        data: { ...defaultParams, ...params, session_id },
      }).then((res) => {
        // console.log('request:=>',res)
        if(res.statusCode === 200){
          const { data } = res
          if (data.status === successCode) {
            resolve(data)
          } else {
            Toast(data.msg)
            reject(data)
          }
        } else if (res.statusCode == 404) {
          Toast('404 请求页面不存在')
        } else if (res.statusCode == 408) {
          Toast('请求超时')
        } else if (res.statusCode == 500) {
          Toast('服务器错误')
        } else if (res.statusCode == 0) {
          Toast('网络连接超时')
        } else if (res.statusCode == 501){
          // Toast('请进行登录')
        }
      }).catch((err) => {
        const errorMsg = JSON.stringify(err)
        // Taro.showToast({ title: errorMsg, icon: 'none' })
        reject({ err: errorMsg })
      })
    }
  })
}

let Toast = (msg) => {
  Taro.showToast({
    title: msg,
    duration: 3000,
    icon: 'none',
    mask:true
  })
}

let Model = (msg) => {
  Taro.showModal({
    title: '提示',
    content: msg,
    showCancel: false
  })
}


export default class Http {
  // get 方法封装
  static get(url, params = {}) {
    return Ajax('GET', url, params)
  }

  // post 方法封装
  static post(url, params = {}) {
    return Ajax('POST', url, params)
  }

  // put 方法封装
  static put(url, params = {}) {
    return Ajax('PUT', url, params)
  }
}

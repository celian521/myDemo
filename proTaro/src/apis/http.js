/**
 *  @Title   Taro.request 网络请求 interceptor
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

const promiseFun = (method, url, params) => {
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
      }).then(({ data }) => {
        if (data.status === successCode) {
          resolve(data)
        } else {
          console.error('error=>', data)
          Taro.showToast({ title: data.msg, icon: 'none' })
          // reject({ err: data.retMsg, code: data.retCode })
        }
      }).catch((err) => {
        const errorMsg = JSON.stringify(err)
        Taro.showToast({ title: errorMsg, icon: 'none' })
        reject({ err: errorMsg })
      })
    }
  })
}

export default class Http {
  // get 方法封装
  static get(url, params = {}) {
    return promiseFun('GET', url, params)
  }

  // post 方法封装
  static post(url, params = {}) {
    return promiseFun('POST', url, params)
  }

  // put 方法封装
  static put(url, params = {}) {
    return promiseFun('PUT', url, params)
  }
}

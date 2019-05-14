/**
 *  @Title   网络请求 interceptor 拦截处理
 *  @Auther  Stephen WU
 *  @Des     描述
 *  @Time    2019
 */

import Taro from '@tarojs/taro'
// import store from '../store'

const successCode = 0

// 默认参数
const defaultParams = {

}

const Ajax = (method, url, params) => {

  return new Promise((resolve, reject) => {
      Taro.request({
        header: { 'content-type': 'application/json' },
        method: method,
        url: url,
        data: params,
      }).then((res) => {
        // console.log('request:=>',res)
        if (res.statusCode === 200) {
          const { data } = res
          if (data.rescode === successCode) {
            resolve(data)
          } else {
            Toast('数据错误')
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
        } else if (res.statusCode == 501) {
          // Toast('请进行登录')
        }
      }).catch((err) => {
        const errorMsg = JSON.stringify(err)
        // Taro.showToast({ title: errorMsg, icon: 'none' })
        reject({ err: errorMsg })
      })
  })
}

let Toast = (msg) => {
  Taro.showToast({
    title: msg,
    duration: 3000,
    icon: 'none',
    mask: true
  })
}

// let Model = (msg) => {
//   Taro.showModal({
//     title: '提示',
//     content: msg,
//     showCancel: false
//   })
// }


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

/**
 *  @Title   网络请求
 *  @Auther  Stephen WU
 *  @Des     描述
 *  @Time    2019
 */

import Taro from '@tarojs/taro'

const baseUrl = 'https://sem.gznewbp.com'
const successCode = '1'

// 默认参数
const defaultParams = {
  company_id: 3,
  version: '1.0.0',
  service_id: 2
}

let session_id = null

// const request = options => {
//   const { url, method = 'POST', params } = options
//   return new Promise((resolve, reject) => {
//     Taro.request({
//       header: { 'content-type': 'application/json' },
//       method: method,
//       url: baseUrl + url,
//       data: params,
//     }).then(({ data }) => {
//       if (data.status === successCode) {
//         resolve(data)
//       } else {
//         console.error('error=>', data)
//         Taro.showToast({ title: data.msg, icon: 'none' })
//         // reject({ err: data.retMsg, code: data.retCode })
//       }
//     }).catch((err) => {
//       const errorMsg = JSON.stringify(err)
//       Taro.showToast({ title: errorMsg, icon: 'none' })
//       reject({ err: errorMsg })
//     })
//   })
// }

const request = options => {
  const { url, method = 'POST', params } = options
  return new Promise((resolve, reject) => {

    Taro.request({
      header: { 'content-type': 'application/json' },
      method: method,
      url: baseUrl + url,
      data: params,
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

  })

}


export default function fetch(url, params = {}) {
  // if (session_id) {
  //   return request({ url, params: { ...defaultParams, session_id, ...params } })
  // } else {
    Taro.login({
      success(res) {
        if (res.code) {
          request({ url: '/weixin/getUserInfo', params: { ...defaultParams, code: res.code, company_id: 1 } }).then(ress => {
            session_id = ress.data.session_id
            return Promise.resolve('k')
          }).then((v) => {
            return new Promise((resolve, reject) => {
              resolve('aa')
            })
            // return Promise.resolve('aa')
            // return request({ url, params: { ...defaultParams, session_id, ...params } })
          })
        }
      }
    })
  // }
}



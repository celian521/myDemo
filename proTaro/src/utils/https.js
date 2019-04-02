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

export default function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
  const method = 'POST'
  const funRequest = () =>{
    // #####
    Taro.request({
      header: { 'content-type': 'application/json' },
      method: method,
      url: baseUrl + url,
      data: { ...defaultParams, ...params, session_id },
    }).then(({ data }) => {
      if (data.status === successCode) {
        resolve(data)
      } else {
        console.wran('error=>', data)
        Taro.showToast({ title: data.msg, icon: 'none' })
        // reject({ err: data.retMsg, code: data.retCode })
      }
    }).catch((err) => {
      const errorMsg = JSON.stringify(err)
      Taro.showToast({ title: errorMsg, icon: 'none' })
      reject({ err: errorMsg })
    })
    // #####
  }
  // // END
  if (session_id) {
    return funRequest()
  } else {
    // ===
    Taro.login({
      success(res) {
        if (res.code) {
          Taro.request({
            header: {
              'content-type': 'application/json'
            },
            method: 'POST',
            url: baseUrl + '/weixin/getUserInfo',
            data: {
              ...defaultParams,
              code: res.code,
              company_id: 1
            },
          }).then(({data}) => {
            session_id = data.data.session_id
            return funRequest()
          })
          //  END
        }
      }
    })
    // /====
  }
  }) //END Promise
}

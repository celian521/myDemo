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

const { baseUrl } = PATH

export default {
  // 获取列表
  getList(params) {
    return http.get(baseUrl + '/books', params)
  },
}

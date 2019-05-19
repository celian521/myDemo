/**
 *  @Title
 *  @Auther  Stephen WU
 *  @Des     描述
 *  @Time    2019
 */
import Taro from '@tarojs/taro'
import { observable } from 'mobx'

const globalStore = observable({
  loginCode: '',
  userInfo: {
    avatarUrl: 'https://dummyimage.com/150x150/eee/999',
    gender: 0, // 性别 0：未知、1：男、2：女
    nickName: '##'
  },

  login() {

    Taro.checkSession().then((res) => {

      console.log(res, 'session有效', this.loginCode)
      Taro.getStorage({ key: 'loginCode' }).then(({ data }) => {
        this.loginCode = data
      }).catch((err) => { console.error('getStorageCode', err) })

    }).catch((err) => {
      console.log(err)

      Taro.login().then((res) => {
        if (res.code) {
          this.loginCode = res.code
          Taro.setStorage({ key: 'loginCode', data: res.code })
          console.log('登录成功!' + res.code)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      })

    })
  },

  async getCode() {
    const res = await Taro.getStorage({ key: 'loginCode' })
    return res
  },

  setUserInfo(data) {
    const { nickName, avatarUrl, gender } = data
    this.userInfo.nickName = nickName || '###'
    this.userInfo.avatarUrl = avatarUrl || 'https://dummyimage.com/150x150/eee/999'
    this.userInfo.gender = gender
  },
  getUserInfo() {
    if (this.userInfo.nickName === '##') {
      Taro.getUserInfo().then((res) => {
        this.setUserInfo(res.userInfo)
      }).catch(() => { })
    }
  }

})


export default globalStore

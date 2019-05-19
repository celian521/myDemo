
import Taro from '@tarojs/taro'
// import * as qiniu from 'qiniu-js'

export default {
  // 七牛云 外链域名
  domain() {
    return 'http://weiapp.singworld.cn/' // 显示域名
  },
  /**
   * 获取 七牛云token
   */
  async getToken() {
    const res = await Taro.request({
      header: { 'content-type': 'application/json' },
      method: 'put',
      url: 'http://10.0.1.26:20292/qiniu/getSimpleToken',
      data: { data: {} },
    });
    return res.data.status === 0 ? res.data.data.uploadToken : ''
  },
  /**
   * 生成文件名
   * @param {Object} file
   */
  makeFileName(file) {
    const name = file.path
    let arr = name.split('.')
    // console.log(arr)
    // Date.parse(new Date())
    return `${Date.parse(new Date())}.${arr[arr.length - 1]}`
    // return `${file.uid}.${arr[arr.length - 1]}`
  },

  /**
   * SDK 上传文件
   * @param {Object} file
   * @param {Object} observer
   */
  async uploadWithSDK(file, observer) {
    const token = await this.getToken()
    const params = {
      url: 'https://upload-z2.qiniup.com',
      name: 'file',
      filePath: file.path,
      header: {
        "Content-Type": "multipart/form-data"
      },
      formData: {
        token: token,
      }
    }
    Taro.uploadFile(params).progress((res) => {
      console.log('1', res)
    }).then(res => {
      if (res.statusCode === 200) {
        console.log('uploadFile', res, res.data)
      }
    }).catch(err => {
      console.log('uploadFileERROR', err)
    })

    // uploadTask.abort()

    // uploadTask.progress(() => {
    //   console.log('1')
    // })

    // uploadTask.headersReceive(()=>{
    //   console.log('2')
    // })

  },
  /**
   * 验证文件
   * @param {Object} file
   * @param {Object} rules 验证规则
   * eg.
   *    rules:{
   *     type:  ['.jpg', .png],
   *     size: 3   // 单位 M
   *    }
   */
  fileValidation(file, rules) {
    if (!rules) return true
    const { type = '*', size = 5 } = rules
    const isTYPE = type === '*' || this.checkType(file.name, type)
    const isLt2M = file.size / 1024 / 1024 <= size
    if (!isTYPE) {
      alert(`上传文件只能是 ${type} 格式!`)
    }
    if (!isLt2M) {
      alert(`上传头像图片大小不能超过 ${size}MB!`)
    }
    return isTYPE && isLt2M
  },
  /**
   * 验证上传文件类型
   * @param {Object} fileName 文件名，包含扩展名
   * @param {Array} allowed 允许类型
   */
  checkType(fileName, allowed) {
    var seat = fileName.lastIndexOf('.')
    var extension = fileName.substring(seat).toLowerCase() // 获取文件扩展名
    for (var i = 0; i < allowed.length; i++) {
      if (allowed[i] === extension) return true
    }
    return false
  },
  /**
   * 读取图片数据
   * @param {Object} file
   */
  readImageData(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader()
      reader.onload = e => {
        let data = e.target.result
        // 加载图片获取图片真实宽度和高度
        let image = new Image()
        image.onload = () => {
          let w = image.width
          let h = image.height
          resolve({ width: w, height: h })
        }
        image.src = data
      }
      reader.readAsDataURL(file)
    })
  }

  // end
}

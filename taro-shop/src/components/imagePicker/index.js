import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components';
import { AtImagePicker, AtProgress } from 'taro-ui'
import { observer } from '@tarojs/mobx';

import utilUpload from './utilUpload';

@observer
class AmImagePicker extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      falg: true,
      progressPercent: 0,
      files: [],
    }
  }
  /**
   * 上传文件
   */
  async doUpload(files) {
    const file = files[files.length - 1].file
    console.log('file:::', file);
    const token = await utilUpload.getToken()
    const params = {
      url: 'https://upload-z2.qiniup.com',
      name: 'file',
      filePath: file.path,
      header: {
        "Content-Type": "multipart/form-data"
      },
      formData: {
        token: token
      }
    }

    const uploadTask = Taro.uploadFile(params).progress((res) => {
      // 上传进度
      this.setState({
        progressPercent: res.progress
      })
    }).then(res => {
      if (res.statusCode === 200) {
        // 上传成功
        const data = JSON.parse(res.data)
        const url = `http://weiapp.singworld.cn/${data.key}`;
        this.setState(preState => {
          preState.files = [...this.state.files, { url }]
          preState.progressPercent = 100
        })
      }else{
        console.warn(res)
      }
    }).catch(err => {
      // 上传失败
      console.warn('uploadFileERROR', err)
    })
  }
  /**
   * 删除文件
   * 删除远程文件功能暂时接入
   */
  removeFile = index => {
    let data = this.state.files;
    data.splice(index, 1)
    this.setState({
      files: data
    })
  }

  /**
   * 	files 值发生变化触发的回调函数
   * @param {Array} files 数组，多文件
   * @param {string} doType 操作类型:添加add/移除remove
   * @param {number} index  如果是移除操作，index为移除图片时返回的图片下标
   */
  onChange(files, operationType, index) {
    console.log('==>', files)
    // 添加文件操作
    if (operationType === 'add') {
      // if (!this.state.falg) return false;
      // this.setState({
      //   falg: false
      // })
      // setTimeout(() => {
      //   this.setState({
      //     falg: true
      //   })
      // }, 10);
      this.doUpload(files) // 执行上传文件
    }
    // 删除文件操作
    if (operationType === 'remove') {
      this.removeFile(index) // 执行删除文件
    }
  }
  /**
   * 选择失败触发的回调
   * @param {*} mes
   */
  onFail(mes) {
    console.log(mes)
  }
  /**
   * 点击图片触发的回调
   * @param {*} index
   * @param {*} file
   */
  onImageClick(index, file) {
    console.log(index, file)
  }
  render() {
    const { progressPercent, files } = this.state
    return (
      <View >
        <AtImagePicker
          files={files}
          mode='aspectFit'
          multiple
          showAddBtn
          length={3}
          count={5}
          onChange={this.onChange.bind(this)}
          onImageClick={this.onImageClick.bind(this)}
          onFail={this.onFail.bind(this)}
        />
        {/* 上传进度条  sizeType={['compressed']}
          sourceType={['camera']}*/ }
        {
          progressPercent > 0 && progressPercent < 100 &&
          <AtProgress percent={progressPercent} isHidePercent status='progress' />
        }
      </View>
    )
  }
}

export default AmImagePicker

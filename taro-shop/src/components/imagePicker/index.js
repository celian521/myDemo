import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components';
import { AtImagePicker, AtProgress } from 'taro-ui'
// import PropTypes from 'prop-types';
import { observer } from '@tarojs/mobx';

import './index.scss';

@observer
class AmImagePicker extends Component {
  static propTypes = {

  };
  static defaultProps = {

  };
  constructor() {
    super(...arguments)
    this.state = {
      progressPercent: 0,
      files: [],
    }
  }
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
  }
  /**
   * 上传文件
   */
  async doUpload(files) {
    const len = files.length
    const token = await this.getToken()
    let i = 0
    const toUpload = () => {
      if(i>=len) return false;
      const file = files[i].file
      i++
      if(!file){
        toUpload();
        return false
      }
      console.log(i,'/',len, file)
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
      Taro.uploadFile(params).progress((res) => {
        // 上传进度
        this.setState({
          progressPercent: res.progress
        })
      }).then(res => {
        if (res.statusCode === 200) {
          // 上传成功
          const data = JSON.parse(res.data)
          const url = `http://weiapp.singworld.cn/${data.key}`;
          console.log('url:', url)
          this.setState(preState => {
            preState.files = [...this.state.files, { url }]
            preState.progressPercent = 100
          })
        }else{
          console.warn(res)
        }
        toUpload();
      }).catch(err => {
        // 上传失败
        console.warn('uploadFileERROR', err)
        toUpload();
      })
    }
    toUpload();
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
    // 添加文件操作
    if (operationType === 'add') {
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
    const len = files.length
    return (
      <View >
        <AtImagePicker
          files={files}
          mode='aspectFill'
          multiple
          showAddBtn={len < 3}
          length={3}
          count={5}
          onChange={this.onChange.bind(this)}
          onImageClick={this.onImageClick.bind(this)}
          onFail={this.onFail.bind(this)}
        />
        {
          /* 上传进度条*/
          progressPercent > 0 && progressPercent < 100 &&
          <AtProgress percent={progressPercent} isHidePercent status='progress' />
        }
      </View>
    )
  }
}

export default AmImagePicker

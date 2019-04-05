import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import {  AtForm, AtInput, AtButton } from 'taro-ui'
import apis from '@apis'
import './index.scss';

export default class FromJoinusCompany extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      falg:  false,
      fromData: {
        company_name: '',
        company_code: '',
        phone: '',
        email: '',
      }
    }
  }

  companyNameChange = value => {
    this.setState((preState)=>{
      preState.fromData.company_name = value
    })
  }

  companyCodeChange = value => {
    this.setState((preState)=>{
      preState.fromData.company_code = value
    })
  }

  phoneChange = value => {
    this.setState((preState)=>{
      preState.fromData.phone = value
    })
  }

  emailChange = value => {
    this.setState((preState)=>{
      preState.fromData.email = value
    })
  }

  // 验证
  validator = () => {
    let Toast = (msg) => {
      Taro.showToast({
        title: msg,
        icon: 'none'
      })
    }
    const { fromData } = this.state
    const regex_email = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
    const regex_phone = /^1[3|4|5|8][0-9]\d{8}$/
    if(!fromData.company_name) {
      Toast('公司名称不能为空')
      return false
    }else if(!fromData.company_code) {
      Toast('公司营业执照编号不能为空')
      return false
    }else if(!(regex_phone.test(fromData.phone))) {
      Toast('手机号码有误')
      return false
    }else if(!(regex_email.test(fromData.email))) {
      Toast('邮件地址有误')
      return false
    }else {
      return true
    }
  }

  onSubmit = () => {
    if(!this.validator()) return
    this.setState({
      falg: true
    })
    apis.postJoinusCompany(this.state.fromData).then((res)=>{
      this.setState({
        falg: false
      })
      Taro.showModal({
        title: '提交成功',
        content: '审核结果很快通知你，请稍候',
      }).then(res => console.log(res.confirm, res.cancel))
    })
  }

  render() {
    const { fromData, falg } = this.state
    return (
      <View>
        <AtForm
          onSubmit={this.onSubmit.bind(this)}
        >
            <AtInput
              name='company_name'
              title='公司名称'
              type='text'
              placeholder='请输入'
              value={fromData.company_name}
              onChange={this.companyNameChange.bind(this)}
            />

            <AtInput
              name='company_code'
              title='营业执照号'
              type='text'
              placeholder='请输入'
              value={fromData.company_code}
              onChange={this.companyCodeChange.bind(this)}
            />

            <AtInput
              name='phone'
              title='联系手机'
              type='phone'
              placeholder='请输入'
              value={fromData.phone}
              onChange={this.phoneChange.bind(this)}
            />

            <AtInput
              name='email'
              title='电子邮箱'
              type='text'
              placeholder='请输入'
              value={fromData.email}
              onChange={this.emailChange.bind(this)}
            />

            <AtButton disabled={falg} loading={falg} formType='submit' type='primary'>提交</AtButton>

          </AtForm>
      </View>
    )
  }
}

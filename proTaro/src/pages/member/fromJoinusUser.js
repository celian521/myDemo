import Taro, { Component } from '@tarojs/taro';
import { View, Picker } from '@tarojs/components';
import {  AtForm, AtInput, AtButton } from 'taro-ui'
import apis from '@apis'
import './index.scss';

export default class FromJoinusUser extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      falg:  false,
      select:{
        value: '',
        options: ['女', '男']
      },
      fromData: {
        sex: '',
        name: '',
        phone: '',
        email: '',
        company_name: ''
      }
    }
  }

  sexChange = e => {
    this.setState((preState)=>{
      preState.fromData.sex = e.detail.value
      preState.select.value = this.state.select.options[e.detail.value]
    })
  }

  nameChange = value => {
    this.setState((preState)=>{
      preState.fromData.name = value
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

  companyNameChange = value => {
    this.setState((preState)=>{
      preState.fromData.company_name = value
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
    if(!fromData.name) {
      Toast('姓名不能为空')
      return false
    }else if(!fromData.sex) {
      Toast('性别不能为空')
      return false
    }else if(!(regex_phone.test(fromData.phone))) {
      Toast('手机号码有误')
      return false
    }else if(!(regex_email.test(fromData.email))) {
      Toast('邮件地址有误')
      return false
    }else if(!fromData.company_name) {
      Toast('单位名称不能为空')
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
    apis.postJoinusUser(this.state.fromData).then((res)=>{
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
    const { fromData, select, falg  } = this.state
    return (
      <View>
        <AtForm
          onSubmit={this.onSubmit.bind(this)}
        >
            <AtInput
              name='name'
              title='姓名'
              type='text'
              placeholder='请输入'
              value={fromData.name}
              onChange={this.nameChange.bind(this)}
            />

            <Picker mode='selector' range={select.options} onChange={this.sexChange}>
              <AtInput
                name='sex'
                title='性别'
                type='number'
                placeholder='请输入'
                value={select.value}
              />
            </Picker>

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

            <AtInput
              name='company_name'
              title='单位名称'
              type='text'
              placeholder='请输入'
              value={fromData.company_name}
              onChange={this.companyNameChange.bind(this)}
            />

            <AtButton disabled={falg} loading={falg} formType='submit' type='primary'>提交</AtButton>
          </AtForm>
      </View>
    )
  }
}

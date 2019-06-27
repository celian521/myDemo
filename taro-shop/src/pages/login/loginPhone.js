import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, Text } from '@tarojs/components'
import { AtForm, AtInput, AtButton } from 'taro-ui'
import './index.scss'

// @inject()
// @observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      falg: false,
      second: 0,
      fromData: {
        phone: '',
        code: ''
      }
    }
  }

  handleChange = (key, value) => {
    this.setState(preState => {
      preState.fromData[key] = value
    })
  }

  // 获取验证码
  getCode = falg => {
    if (!falg) return false
    // 验证手机号码
    const hasPhone = value => {
      const regex_phone = /^1[3|4|5|8][0-9]\d{8}$/
      return regex_phone.test(value)
    }
    if (hasPhone(this.state.fromData.phone)) {
      this.countdown(60)
    } else {
      Taro.showToast({
        title: '手机号码有误',
        icon: 'none'
      })
    }
  }

  //  60S 倒计时
  countdown = s => {
    this.setState({
      second: s
    }, () => {
      const T = setInterval(() => {
        this.setState({
          second: this.state.second - 1
        }, () => {
          if (this.state.second === 0) clearInterval(T)
        })
      }, 1000);
    })
  }

  onSubmit = e => {
    if (!this.validator()) return
    this.setState({
      falg: true
    })
    const temp = this.state.fromData
    console.log('temp', temp)
    setTimeout(() => {
      this.setState({
        falg: false
      })
    }, 3000);
  }


  // 验证
  validator = () => {
    const Toast = msg => {
      Taro.showToast({
        title: msg,
        icon: 'none'
      })
    }
    const { phone, code } = this.state.fromData

    // 验证手机号码
    const hasPhone = value => {
      const regex_phone = /^1[3|4|5|8][0-9]\d{8}$/
      return regex_phone.test(value)
    }

    const hasCode = !!code

    if (!hasPhone(phone)) {
      Toast('手机号码有误')
      return false
    } else if (!hasCode) {
      Toast('验证码不能为空')
      return false
    } else {
      return true
    }

  }

  render() {
    const { fromData, falg, second } = this.state
    const { phone, code } = fromData
    return (
      <View className='wrap loginPhone'>
        <View className='tit'>欢迎使用咪哒minik</View>
        <AtForm
          onSubmit={this.onSubmit.bind(this)}
        >
          <AtInput
            name='phone'
            title=''
            type='phone'
            placeholder='输入手机号码'
            value={phone}
            onChange={this.handleChange.bind(this, 'phone')}
          >
            <Text onClick={this.getCode.bind(this, !second)}>{ !second ? "获取验证码" : `重新获取(${second})` }</Text>
          </AtInput>

          <AtInput
            name='code'
            title=''
            type='text'
            placeholder='输入短信验证码'
            value={code}
            onChange={this.handleChange.bind(this, 'code')}
          />
          <AtButton disabled={!(!!code && !!phone && !falg)} loading={falg} formType='submit' type='primary'>注册 / 登录</AtButton>
        </AtForm>
      </View>
    )
  }
}

export default Index

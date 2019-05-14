/**
 * 发起支付 DEMO
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import { View, Text, Radio, Image, RadioGroup, Label } from '@tarojs/components'
import { AtButton, AtDivider, AtModal, AtNoticebar } from 'taro-ui'
// import {  } from '@components'
// import apis from '@apis'

// import linkTo from '@utils/linkTo.js'


import './index.scss'


@inject()

@observer
class Recharge extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      payType: 'wx',
      list: [
        {
          value: 'wx',
          text: '微信支付',
          checked: true,
          disabled: false
        },
        {
          value: 'ali',
          text: '支付宝',
          checked: true,
          disabled: false
        }
      ]
    }
  }

  config = {
    navigationBarTitleText: '发起预支付'
  }

  componentWillMount() {

  }

  // 发起预支付
  pay = () => {
    console.log(this.state.list)
    const config = {
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: ''
    }

    Taro.requestPayment(config).then((res) => {
      console.log('pay', res)
    }).catch((err) => { console.log(err) })
  }



  handelRadio = e => {
    this.setState({
      payType: e.detail.value
    })
  }




  render() {
    const { list } = this.state

    return (
      <View className='wrap'>
        <RadioGroup onChange={this.handelRadio} >
          { list.map((item, i) => {
            return (
              <Label className='selectPay' for={i} key={i}>
                <Radio id={i} value={item.value} checked={item.checked} disabled={item.disabled} > { item.text } </Radio>
              </Label>
            )
          }) }
        </RadioGroup>
        <AtButton type='primary' onClick={this.pay}>发起预支付</AtButton>
      </View>
    )
  }
}

export default Recharge

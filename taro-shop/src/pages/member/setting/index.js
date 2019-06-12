/**
 * 账号设置
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import { View, Text } from '@tarojs/components'
import { AtList, AtListItem, AtButton, AtFloatLayout, AtCalendar, AtActionSheet, AtActionSheetItem } from 'taro-ui'


// import apis from '@/apis'
// import linkTo from '@/utils/linkTo.js'


import './index.scss'


@inject('globalStore')

@observer
class Setting extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      hasOpened: '',
      userInfo: { birthday: '' }
    }
  }
  config = {
    navigationBarTitleText: '账号设置',
  }
  componentDidMount() {
    this.setState({
      userInfo: { ...this.state.userInfo, ...this.props.globalStore.userInfo }
    })
  }

  openLayout(key) {
    this.setState({
      hasOpened: key
    })
  }

  handleClose() { }
  handleDay(e) {
    this.setState((preState) => {
      preState.userInfo.birthday = e.value,
        preState.hasOpened = ''
    })
  }

  handleClick(e) {
    this.setState((preState) => {
      preState.userInfo.gender = e,
        preState.hasOpened = ''
    })
  }
  render() {
    const { hasOpened, userInfo } = this.state
    const { nickName, avatarUrl, gender, birthday } = userInfo
    const sexOption = {
      0: '请选择',
      1: '男',
      2: '女'
    } // 性别

    return (
      <View>

        <AtList hasBorder={false}>
          <AtListItem className='avatar' title='头像' extraThumb={avatarUrl} />
          <AtListItem title='昵称' extraText={nickName} />
          <AtListItem title='性别' extraText={sexOption[gender]} arrow='right' onClick={this.openLayout.bind(this, 'sex')} />
          <AtListItem title='生日' extraText={birthday || '设置生日'} arrow='right' onClick={this.openLayout.bind(this, 'birthday')} />
          <AtListItem title='手机号' extraText='159*****123' />
        </AtList>

        <View className='submit'>
          <AtButton type='primary'>保存</AtButton>
        </View>

        <AtActionSheet isOpened={hasOpened === 'sex'} cancelText='取消' title='请选择性别'>
          <AtActionSheetItem onClick={this.handleClick.bind(this, 1)}>
            男
          </AtActionSheetItem>
          <AtActionSheetItem onClick={this.handleClick.bind(this, 2)}>
            女
          </AtActionSheetItem>
        </AtActionSheet>

        <AtFloatLayout isOpened={hasOpened === 'birthday'} title='设置生日' onClose={this.handleClose.bind(this)}>
          <AtCalendar minDate='1970/1/1' maxDate='2020/10/1' onDayClick={this.handleDay} />
        </AtFloatLayout>

      </View>
    )
  }
}

export default Setting

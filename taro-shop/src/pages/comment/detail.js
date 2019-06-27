/**
 * 评论详情
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, Text, Input } from '@tarojs/components'
import { AtLoadMore, AtInput, AtButton } from 'taro-ui'
import { ItemComment } from '@/components'
// import apis from '@/apis'

import './detail.scss'

// @inject()
// @observer
class Detail extends Component {
  config = {
    navigationBarTitleText: '评论详情',

  }
  constructor() {
    super(...arguments);
    this.state = {

    }
  }

  render() {
    return (
      <View>

        <View className='main'>
          <ItemComment data={[1]} type='main' />
        </View>

        <View className='list'>
          <View className='title'>评论(300）</View>
          <ItemComment data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 8]} />
        </View>

        <View className='space'>{/* 空间占位 */ }</View>

        <View className='fixedBottom'>
          <View className='at-row at-row__align--center at-row__justify--between'>
            <View className='at-col at-col-10'>
              <Input
                border={false}
                placeholder='回复评论：'
                type='text'
                value={this.state.value4}
                onChange={this.handleChange.bind(this)}
              />
            </View>
            <View className='at-col at-col-2' style={{ textAlign: 'right' }}>
              <AtButton circle size='small' type='primary'>发送</AtButton>
            </View>
          </View>
        </View>

      </View>
    )
  }
}

export default Detail

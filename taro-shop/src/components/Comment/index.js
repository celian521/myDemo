/**
 * 活动讨论
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components';
import { AtAvatar, AtIcon, AtSearchBar } from 'taro-ui'
import PropTypes from 'prop-types';
import linkTo from '@/utils/linkTo.js'

import svgGive from './assets/give.svg';
import svgGiveActive from './assets/give-active.svg';

import './index.scss';

export default class index extends Component {
  static propTypes = {
    data: PropTypes.array,
    type: PropTypes.string
  };
  static defaultProps = {
    data: [],
    type: ''
  };
  constructor() {
    super(...arguments)
    this.state = {
    }
  }
  render() {
    const { data, type } = this.props
    return (
      <View className='comment-block'>
        { data.map(item => (

          <View key='' className='item'>

            {/* 用户资料 */ }
            <View className='item-user'>
              <View className='avatar'>
                <Image src='https://dummyimage.com/350x350/eee/999' mode='aspectFill' />
              </View>
              <View className='info'>
                <Text className='userName'> 巴啦啦小魔仙</Text>
                <Text>
                  2019/05/09
            </Text>
              </View>
              <View className='tool'>
                <Text className='active'>30000</Text>
                <Image src={svgGiveActive} />
                {
                  type != 'main' &&
                  <Text>回复</Text>
                }
              </View>
            </View>
            {/* 用户资料 END! */ }

            {/* 评价内容 */ }
            <View className='item-content'>
              <View >
                支持，支持，支持好声音！支持好声音！ 支持，支持，支持好声音！支持好声音！
              <View className='picture'>
                  <View className='picture-item'>
                    <Image src='https://dummyimage.com/750x350/eee/999' show-menu-by-longpress lazy-load mode='aspectFill' />
                  </View>
                  <View className='picture-item'>
                    <Image src='https://dummyimage.com/350x750/eee/999' show-menu-by-longpress lazy-load mode='aspectFill' />
                  </View>
                  <View className='picture-item'>
                    <Image src='https://dummyimage.com/350x360/eee/999' show-menu-by-longpress lazy-load mode='aspectFill' />
                  </View>
                  <View className='picture-item'>
                    <Image src='https://dummyimage.com/400x350/eee/999' show-menu-by-longpress lazy-load mode='aspectFill' />
                  </View>
                  <View className='picture-item'>
                    <Image src='https://dummyimage.com/350x550/eee/999' show-menu-by-longpress lazy-load mode='aspectFill' />
                  </View>
                  <View className='picture-item'>
                    <Image src='https://dummyimage.com/2350x350/eee/999' show-menu-by-longpress lazy-load mode='aspectFill' />
                  </View>
                </View>
              </View>
              {
                type != 'main' &&
                <View>
                  回复<Text className='userName'>STEPHEN</Text>: 支持好声音！
                </View>
              }
              {
                type != 'main' &&
                <View className='item-bottom' onClick={() => linkTo({ url: '/pages/comment/detail' })}>
                  129条回复 <AtIcon value='chevron-right' size='14' color='#999'></AtIcon>
                </View>
              }

            </View>
            {/* 评价内容 END! */ }

          </View>
        )) }
      </View>
    )
  }
}

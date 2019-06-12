/**
 * 搜索结果页面
 */
import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
// import { AtIcon } from 'taro-ui'
import { ItemList, Empty } from '@/components'
// import linkTo from '@/utils/linkTo'
import PropTypes from 'prop-types';
import './result.scss';


export default class Result extends Component {
  static propTypes = {
    title: PropTypes.string,
    url: PropTypes.string
  };
  static defaultProps = {
    title: 'TITLE',
    url: ''
  };
  constructor() {
    super(...arguments);
    this.state = {
      type: 'activity',  // 搜索内容类型 activity / goods / store / preferential
    }
  }
  // handleClick = url => {
  //   url && linkTo({ url })
  // }

  handleNav = type => {
    this.setState({
      type
    })
  }
  render() {
    const { type } = this.state
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const nav = [
      {
        name: '活动',
        value: 'activity'
      },
      {
        name: '优惠',
        value: 'coupon'
      },
      {
        name: '商品',
        value: 'goods'
      },
      {
        name: '门店',
        value: 'store'
      }
    ]
    return (
      <View>
        <View className='nav'>
          {
            nav.map(item => (
              <View
                key=''
                className={`nav-item ${item.value == type && 'active'}`}
                onClick={this.handleNav.bind(this, item.value)}
              >
                { item.name }
              </View>
            ))
          }
        </View>
        <View className='space'>{/* 顶部空间占位 */}</View>
        <View className='result-box'>
        <ItemList type={type} data={data} />
        <Empty type='empty-search' text='暂无搜索结果' />
        </View>
      </View>
    )
  }
}


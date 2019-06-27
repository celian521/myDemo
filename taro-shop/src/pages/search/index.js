/**
 * 搜索页面
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import { View, Text } from '@tarojs/components'
import { AtTag, AtSearchBar, AtIcon } from 'taro-ui'
import { ItemList, Empty } from '@/components'
import Result from './result.js'
// import apis from '@/apis'
// import linkTo from '@/utils/linkTo.js'

import './index.scss'

// @inject()

// @observer
class Search extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetail: false, // 显示搜索详情
      value: '',
      history: []
    }
  }
  config = {
    navigationBarTitleText: '搜索',
    onReachBottomDistance: 50
  }
  onReachBottom() {
    // 下拉加载
  }

  componentDidMount() {
    Taro.getStorage({ key: 'search' }).then(({ data }) => {
      this.setState({
        history: data
      })
    }).catch((err) => { console.log(err) })
  }
  componentWillUnmount() {
    Taro.setStorageSync('search', this.state.history)
  }

  clearHistory() {
    Taro.showModal({
      title: '清空历史记录',
    }).then(res => {
      if (res.confirm) {
        this.setState({
          history: []
        })
      }
    })
  }

  TimeOut = null
  onChange(value) {
    this.setState({
      value: value
    })
    clearTimeout(this.TimeOut)
    this.TimeOut = setTimeout(() => {
      console.log(value)
    }, 1000);
  }
  onActionClick() {
    const value = this.state.value
    if(!value) return false; // 过滤空值
    this.toSearch(value) // 进入搜索

    // 存入历史搜索记录
    const history = this.state.history
    if(!history.includes(value)){
      this.setState((preState) => {
        preState.history = [value, ...this.state.history],
        preState.showDetail = value ? true : false
      })
    }

  }
  onCancel() {
    Taro.navigateBack()
  }
  onFocus() {
    this.setState({
      showDetail: false,
     // value: null
    })
  }

 // 开始搜索
  toSearch(value) {
    console.log('开始搜索', value)
    this.setState({
      value: value,
      showDetail: true
    })
  }

  render() {
    const { history, value, showDetail } = this.state
    return (
      <View>
        <AtSearchBar
          fixed
          focus
          placeholder='请输入关键词搜索'
          actionName='取消'
          value={value}
          onChange={this.onChange.bind(this)}
          onActionClick={this.onCancel.bind(this)}
          onConfirm={this.onActionClick.bind(this)}
          onFocus={this.onFocus}
          onClear={this.onFocus}
        />
        <View className='space'>{/* 顶部空间占位 */}</View>
        {
          showDetail ? <Result /> :
            // 搜索历史
            history.length &&
            (<View>
              <View className='myTitle'>
                <Text>搜索历史</Text>
                <AtIcon value='trash' size='18' color='#999' onClick={this.clearHistory}></AtIcon>
              </View>
              { history.map(v => (<AtTag circle key='' onClick={this.toSearch.bind(this, v)}>{ v }</AtTag>)) }
            </View>)
        }
      </View>
    )
  }
}

export default Search

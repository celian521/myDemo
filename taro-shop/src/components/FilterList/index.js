/**
 * 列表筛选
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components';
import { AtIcon, AtSearchBar } from 'taro-ui'
import classnames from 'classnames'
import PropTypes from 'prop-types';
import './index.scss';

export default class index extends Component {
  static propTypes = {
    data: PropTypes.array,
    placeholder: PropTypes.string
  };
  static defaultProps = {
    data: [],
    placeholder: '搜索'
  };
  constructor() {
    super(...arguments)
    this.state = {
      value: {
        search: '',
        filter: '',
        option: {},
        optionLabel: {},
      },
      curOptions: []
    }
  }

  handleRadio(e) {
    this.setState(preState => {
      preState.value.option[this.state.value.filter] = e.value
      preState.value.optionLabel[this.state.value.filter] = e.label
    }, () => {
      this.props.onChange(this.state.value)
      this.closeRadio()
    })
  }
  handleFilter(e, flag) {
    if (!!flag) {
      this.closeRadio()
      return false
    }
    this.setState(preState => {
      preState.value.filter = e.value
      preState.curOptions = e.options || []
    }, () => {
      if (!e.options) this.props.onChange(this.state.value)
    })

  }
  // 收起选择项
  closeRadio() {
    setTimeout(() => {
      this.setState({
        curOptions: []
      })
    }, 200);
  }

  onChange(value) {
    this.setState(preState => {
      preState.value.search = value
    })
  }
  onActionClick() {
    this.props.onChange(this.state.value)
  }

  onCancel() {
    this.setState(preState => {
      preState.value.search = ''
    })
  }


  render() {
    const { value, curOptions } = this.state
    const { data, placeholder } = this.props
    const { search, filter, option, optionLabel } = value
    return (
      <View>
        <View className='filterBar'>
          <AtSearchBar
            placeholder={placeholder}
            actionName='取消'
            value={search}
            onChange={this.onChange.bind(this)}
            onActionClick={this.onCancel.bind(this)}
            onConfirm={this.onActionClick.bind(this)}
          />
          <ScrollView scrollX>
            <View className='filter'>
              {
                data.map((item) => {
                  const cur = item.value == filter // 当前
                  const on = cur && !!curOptions.length // 当前,并打开的状态
                  return (
                    <View
                      key=''
                      className={classnames('li', { 'cur': cur, 'on': on })}
                      onClick={this.handleFilter.bind(this, item, on)}
                    >
                      { optionLabel[item.value] || item.label }
                      { item.options && <Text className='triangle'></Text> }
                    </View>
                  )
                })
              }
            </View>
          </ScrollView>
          {/* 下拉选择框 */ }
          <View className='dropdownBox'>
            {
              curOptions.map((item) => (
                <View
                  key=''
                  className={classnames('myRadio', { 'on': item.value == option[filter] })}
                  onClick={this.handleRadio.bind(this, item)}
                >
                  <View className='title'>
                    { item.label } <Text className='desc'>{ item.desc }</Text>
                  </View>
                  <View className='radio'>
                    <AtIcon value='check' size='16' color='#DC5A58'></AtIcon>
                  </View>
                </View>
              ))
            }
          </View>

          {/* 下拉选择框 END */ }

        </View>

        { !!curOptions.length &&
          <View className='mybg' onClick={this.closeRadio}>{/* 黑色蒙层 */ }</View>
        }
        <View className='space'>{/* 空间占位 */ }</View>

      </View>
    )
  }
}


/**
 *  @Title   details
 *  @Auther  Stephen WU
 *  @Des     描述
 *  @Time    2019
 */
import Taro, { Component, chooseInvoiceTitle } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'
import { AtDivider } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'


@inject('apisStore')

@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      title: '###',
      content: '###'
    };
  }
  config = {
    navigationBarTitleText: '...'
  }

  componentWillMount() {
    console.log(this.$router.params)
    const { id } = this.$router.params
    const { apisStore } = this.props
    const data = apisStore.getDetails(id)
    Taro.setNavigationBarTitle({
      title: data.title
    })
    this.setState({
      title: data.title,
      content: data.content
    })
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { } = this.props
    const { title, content } = this.state
    return (
      <View className='at-article wrap'>
        <View className='at-article__h1'>
          { title }
        </View>
        <View className='at-article__content'>
          <View className='at-article__section'>
            <RichText nodes={content} />
          </View>
        </View>
      </View>
    )
  }
}

export default Index

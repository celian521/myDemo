import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components';
import linkTo from '@utils/linkTo'
import mock from '../../mock'
import PropTypes from 'prop-types';
import './index.scss';

if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/style/components/flex.scss");
}

export default class List extends Component {
  static propTypes = {
    data: PropTypes.array,
    type: PropTypes.string
  };

  static defaultProps = {
    data: mock.newsList || [],
    type: 'news', // news | card
  };

  handerLink = id => {
    const url = `/pages/news/index`
    let params = { id } //文章ID
    linkTo({ url, params })
  }

  render() {
    const { type, data } = this.props

    // type:news  ###############################
    const newsTpl = data.map((item, index) => (
      <View key={index} onClick={this.handerLink.bind(this, item.id)} className='news-block at-row at-row__align--center'>
        <View className='at-col at-col-3'>
          <View className='news-img'>
            <Image src={item.img_url} />
          </View>
        </View>
        <View className='at-col at-col-9 at-col--wrap'>
          <View className='news-title'>
            { item.title }
          </View>
          <View className='news-info'>[查看详情]</View>
        </View>
      </View>
    ))

    // type:news2  ###############################
    const news2Tpl = data.map((item, index) => (
      <View key={index} onClick={this.handerLink.bind(this, item.id)} className='news2-block at-row at-row__align--top'>
        <View className='at-col at-col-5'>
          <Image className='news2-img' src={item.img_url} />
        </View>
        <View className='at-col at-col-7 at-col--wrap'>
          <View className='news2-title'>
            { item.title }
          </View>
          <View className='news2-info'>{item.start_day}</View>
        </View>
      </View>
    ))

    // type:news3  ###############################
    const news3Tpl = data.map((item, index) => (
      <View key={index} onClick={this.handerLink.bind(this, item.id)} className='news2-block at-row at-row__align--top'>
        <View className='at-col at-col-7 at-col--wrap'>
          <View className='news2-title'>
            { item.title }
          </View>
          <View className='news2-info'>{item.start_day}</View>
        </View>
        <View className='at-col at-col-5'>
          <Image className='news2-img' src={item.img_url} />
        </View>
      </View>
    ))

    // type:card  ###############################
    const cardList = data.map((item, index) => (
      <View key={index} onClick={this.handerLink.bind(this, item.id)} className='card-item at-col at-col-6 at-col--wrap'>
        <View className='card-inner'>
          <View className='card-img'>
            <Image src={item.img_url} lazyLoad mode='widthFix' />
          </View>
          <View className='card-title'>
            { item.title }
          </View>
          <View className='card-info'>[查看详情]</View>
        </View>
      </View>
    ))
    const cardTpl = (
      <View className='card-block-wrap'>
        <View className='card-block at-row at-row--wrap '>
          { cardList }
        </View>
      </View>
    )

    // type:card2  ###############################
    const card2Tpl = data.map((item, index) => (
      <View
        key={index}
        onClick={this.handerLink.bind(this, item.id)}
        className='card2-item'
      >
        <View className='card2-inner'>
          <View className='card2-img'>
            <Image src={item.img_url} lazyLoad />
          </View>
          <View className='card2-title'>
            { item.title }
          </View>
        </View>
      </View>
    ))

    return (
      <View>
        { type === 'news' ? newsTpl : null }
        { type === 'news2' ? news2Tpl : null }
        { type === 'news3' ? news3Tpl : null }
        { type === 'card' ? cardTpl : null }
        { type === 'card2' ? card2Tpl : null }
      </View>
    )
  }
}

import Taro, { Component } from '@tarojs/taro';
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components';
import linkTo from '@/utils/linkTo'
import PropTypes from 'prop-types';
import './index.scss';

export default class ProSwiper extends Component {
  static propTypes = {
    banner: PropTypes.array
  };
  static defaultProps = {
    banner: []
  };
  constructor() {
    super(...arguments);
    this.state = {
      detail: {
        current: 0,
        currentItemId: null
      }
    }
  }
  handleClick = item => {
    // const url = item.url_path
    // let params = {} //文章ID
    // if( item.url_param ) params.id = item.url_param
    // if (url) linkTo({ url, params })
  }
  handleFinsh = e => {
    // console.log(e.detail)
    this.setState({
      detail: e.detail
    })
  }
  render() {
    const { banner } = this.props;
    // const { detail } = this.state
    // const page = `${detail.current + 1}/${banner.length}`
    return (
      <View className='swiperBox'>
        <Swiper
          className='swiper'
          circular
          indicatorDots
          onAnimationfinish={this.handleFinsh}
        >
          { banner.map((item, index) => (
            <SwiperItem item-id={item.id} className='swiperItem' key={item.id} onClick={this.handleClick.bind(this, item)}>
              <Image src={item.img_path} lazyLoad />
              {/* { item.title && <View className='swiperName'>{ item.title }</View> } */ }
            </SwiperItem>
          )) }
        </Swiper>
        {/* <Text className='swiperPage'>{ page }</Text> */}
      </View>
    )
  }
}


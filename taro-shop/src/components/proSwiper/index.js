import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import linkTo from '@utils/linkTo'
import PropTypes from 'prop-types';
import './index.scss';

export default class ProSwiper extends Component {
  static propTypes = {
    banner: PropTypes.array
  };

  static defaultProps = {
    banner: []
  };
  handleClick = item => {
    // const url = item.url_path
    // let params = {} //文章ID
    // if( item.url_param ) params.id = item.url_param
    // if (url) linkTo({ url, params })
  }
  render() {
    const { banner } = this.props;
    return (
      <Swiper
        className='swiper'
        circular
        indicatorDots
      >
        { banner.map((item, index) => (
          <SwiperItem className='swiperItem' key={index} onClick={this.handleClick.bind(this, item)}>
            <Image src={item.img_path} lazyLoad />
            {/* { item.title && <View className='swiperName'>{ item.title }</View> } */}
          </SwiperItem>
        )) }
      </Swiper>
    )
  }
}


import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

export default class MySwiper extends Component {
  static propTypes = {
    banner: PropTypes.array
  };

  static defaultProps = {
    banner: []
  };

  render() {
    const { banner } = this.props;
    return (
      <Swiper
        className='swiper'
        circular
        indicatorDots
        indicatorColor='#ccc'
        indicatorActiveColor='#855498'
      >
        { banner.map((item, index) => (
          <SwiperItem className='swiperItem' key={index}>
            <Image src={item.img_path} lazyLoad />
            {item.title&&<View className='swiperName'>{item.title}</View>}
          </SwiperItem>
        )) }
      </Swiper>
    )
  }
}


import Taro, { Component } from '@tarojs/taro';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

export default class MySwiper extends Component {
  static propTypes = {
    banner: PropTypes.array,
    home: PropTypes.bool,
  };

  static defaultProps = {
    banner: [],
    home: false
  };

  render() {
    const { banner, home } = this.props;
    return (
      <Swiper
        className='swiper'
        circular
        indicatorDots
        indicatorColor='#ccc'
        indicatorActiveColor='#000'
        autoplay
      >
        { banner.map((item, index) => (
          <SwiperItem key={index}>
            <Image  style='width: 100%; height: auto' src={item.image_src} />
          </SwiperItem>
        ))}
      </Swiper>
    )
  }
}


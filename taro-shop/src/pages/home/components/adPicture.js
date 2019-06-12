import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

import linkTo from '@/utils/linkTo'
import PropTypes from 'prop-types';
import './adPicture.scss';


export default class AdPicture extends Component {
  static propTypes = {
    src: PropTypes.string,
    url: PropTypes.string
  };
  static defaultProps = {
    src: '',
    url: ''
  };
  handleClick = () => {
    const url = this.props.url
    url && linkTo({ url })
  }
  render() {
    const { src } = this.props
    return (
      <View className='ad-box'>
        { src && <View className='adPicture' onClick={this.handleClick}>
          <Image src={src} />
        </View> }
      </View>
    )
  }
}


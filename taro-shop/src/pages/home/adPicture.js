import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image, ScrollView } from '@tarojs/components';
// import { AtIcon } from 'taro-ui'
// import linkTo from '@/utils/linkTo'
// import PropTypes from 'prop-types';
import './adPicture.scss';


export default class AdPicture extends Component {
  // static propTypes = {
  //   title: PropTypes.string,
  //   url: PropTypes.string
  // };
  // static defaultProps = {
  //   title: 'TITLE',
  //   url: ''
  // };
  // handleClick = url => {
  //   url && linkTo({ url })
  // }
  render() {

    return (
      <View className='ad-box'>
        <View className='adPicture'>
          <Image src='https://dummyimage.com/690x240/eee/999' />
        </View>
      </View>
    )
  }
}


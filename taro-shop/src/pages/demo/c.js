import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
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
  // constructor() {
  //   super(...arguments);
  //   this.state = {

  //   }
  // }
  handleClick = item => {

  }

  render() {
    // const {  } = this.props;

    return (
      <View className=''>

      </View>
    )
  }
}


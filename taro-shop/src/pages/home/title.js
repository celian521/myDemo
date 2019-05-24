import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtIcon } from 'taro-ui'
import linkTo from '@/utils/linkTo'
import PropTypes from 'prop-types';
import './title.scss';


export default class ProSwiper extends Component {
  static propTypes = {
    title: PropTypes.string,
    url: PropTypes.string
  };
  static defaultProps = {
    title: 'TITLE',
    url: ''
  };
  handleClick = url => {
    url && linkTo({ url })
  }
  render() {
    const { title, url } = this.props;
    return (
      <View className='tit' onClick={this.handleClick.bind(this, url)}>
        <Text>{ title }</Text>
        { url && <AtIcon value='chevron-right' size='18' color='#999'></AtIcon> }
      </View>
    )
  }
}


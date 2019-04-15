import Taro, { Component } from '@tarojs/taro';
import { View, RichText } from '@tarojs/components';
import { AtDivider } from 'taro-ui'
import { Base64 } from 'js-base64';
import PropTypes from 'prop-types';
import apis from '@apis'

import './index.scss';

export default class AboutUs extends Component {
  static propTypes = {
    newsId: PropTypes.string
  };

  static defaultProps = {
    newsId: '60'
  };

  constructor() {
    super(...arguments);
    this.state = {
      title:'',
      content: ''
    };
  }

  componentWillMount() {
    const id  = this.props.newsId
    apis.getDetails({ id }).then(({ data }) => {
      this.setState({
        title: data.title,
        content: Base64.decode(data.context),
      })
    })
  }

  render() {
    const { title, content  } = this.state;
    return (
      <View className='aboutDetails'>
        <AtDivider content={title} lineColor='#cccccc' fontColor='#855498' />
        <RichText nodes={content}  />
      </View>
    )
  }
}

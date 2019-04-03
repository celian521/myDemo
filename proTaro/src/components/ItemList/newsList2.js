import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/style/components/flex.scss");
}

export default class List extends Component {
  static propTypes = {
    dataList: PropTypes.array
  };

  static defaultProps = {
    dataList: [],
  };

  handerLink = id => {
    const url = `/pages/details/index?id=${id}`
    Taro.navigateTo({ url })
  }
  render() {
    const { dataList } = this.props
    return (
      <View>
        { dataList.map((item, index) => (
          <View key={index} onClick={this.handerLink.bind(this, item.id)} className='news2-block at-row at-row__align--top'>
            <View className='at-col at-col-5'>
              <Image className='news2-img' src={item.img_url} />
            </View>
            <View className='at-col at-col-7 at-col--wrap'>
              <View className='news2-title'>
              {item.title}
          </View>
              <View className='news2-info'>2009-04-12 12:00</View>
            </View>
          </View>
        )) }
      </View>
    )
  }
}


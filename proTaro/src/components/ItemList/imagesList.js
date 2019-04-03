import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui'
import './index.scss';
import PropTypes from 'prop-types';

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
      <View className='images-block-wrap'>
        <View className='images-block at-row at-row--wrap '>
          { dataList.map((item, index) => (
            <View key={index} onClick={this.handerLink.bind(this, item.id)} className='images-item at-col at-col-6 at-col--wrap'>
              <View className='images-inner'>
                <View className='images-img'>
                  <Image src={item.img_url} lazyLoad mode='widthFix' />
                </View>
                <View className='images-title'>
                  {item.title}
                </View>
                <View className='images-info'>[查看详情]</View>
              </View>
            </View>
          )) }
        </View>
      </View>
    )
  }
}


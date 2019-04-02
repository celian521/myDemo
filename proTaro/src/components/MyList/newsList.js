import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, Image, Text } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/style/components/flex.scss");
}

@observer
class List extends Component {

  static propTypes = {
    dataList: PropTypes.array
  };

  static defaultProps = {
    dataList: [],
  };

  handerLink = id => {
    const url = '/pages/details/index?id=3'
    Taro.navigateTo({ url })
  }
  render() {
    const { dataList } = this.props
    console.log('props=>',this.props)
    return (
      <View>
        { dataList.map((item, index) => (
          <View key={index} onClick={this.handerLink.bind('1')} className='news-block at-row at-row__align--center'>
            <View className='at-col at-col-3'>
              <Image className='news-img' src='https://jdc.jd.com/img/150' />
            </View>
            <View className='at-col at-col-9 at-col--wrap'>
              <View className='news-title'>
                {item.title}+旗袍时尚-东方女性000
          </View>
              <View className='news-info'>[查看详情]</View>
            </View>
          </View>
        )) }
      </View>
    )
  }
}

export default List

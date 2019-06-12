import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image, ScrollView } from '@tarojs/components';
// import { AtIcon } from 'taro-ui'
// import linkTo from '@/utils/linkTo'
// import PropTypes from 'prop-types';
import './activity.scss';


export default class Activity extends Component {
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
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
      <View className='activityBox'>
        <ScrollView scrollX >
          <View className='activity'>
            {
              data.map(item => (
                <View key='' className='item-activity'>
                  <View className='item-thumb'><Image src='https://dummyimage.com/670x384/eee/999' /></View>
                  <View className='item-title'>在乎生活音乐轰趴-世界巡回演出广州站珠江-世界巡回演出广州站珠江</View>
                  <View className='item-info'>
                    <Text>12/10-12/20 8:30-10:30</Text>
                    <Text className='price'>￥900</Text>
                  </View>
                </View>
              ))
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}


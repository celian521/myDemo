import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image, ScrollView } from '@tarojs/components';
// import { AtIcon } from 'taro-ui'
import linkTo from '@/utils/linkTo'
// import PropTypes from 'prop-types';
import './brank.scss';


export default class Brank extends Component {
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
      <View className='brankBox'>
        <ScrollView scrollX >
          <View className='brank'>
            {
              data.map(item => (
                <View key='' className='item-brank' onClick={()=>{linkTo({ url:'/pages/shop/main/index' })}}>
                  <View className='item-thumb'><Image src='https://dummyimage.com/350x350/eee/999' /></View>
                  <View>品牌名{item}</View>
                </View>
              ))
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}


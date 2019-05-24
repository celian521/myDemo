import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
// import { AtIcon } from 'taro-ui'
// import linkTo from '@/utils/linkTo'
// import PropTypes from 'prop-types';
import { ProSwiper, ItemList } from '@/components'
import myTitle from './title.js'
// import './index.scss';

export default class Recommend extends Component {
  render() {
    const data = [{
      id: 1,
      img_path: 'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
      title: '000'
    }, {
      id: 2,
      img_path: 'https://img20.360buyimg.com/babel/s700x360_jfs/t1/4096/30/6924/98588/5ba49ceaE80dea401/7e6e5017a3a9de39.jpg!q90!cc_350x180',
      title: '000'
    }, {
      id: 3,
      img_path: 'https://img20.360buyimg.com/babel/s700x360_jfs/t1/11092/6/9448/157017/5c78dfceE84babe4e/b2e7fdddad7034d9.jpg!q90!cc_350x180',
      title: '000'
    }, {
      id: 4,
      img_path: 'https://dummyimage.com/750x360/eee/999',
      title: '000'
    }]
    return (
      <View>
        <ProSwiper banner={data} />
        <myTitle title='逛过的店' url='/pages/goods/index'  />
        <myTitle title='精选活动' url='/pages/list/index' />
        <myTitle title='热门商品' />
        <ItemList type='goods' data='' />
      </View>
    )
  }
}


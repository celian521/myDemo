import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { ProSwiper, ItemList } from '@/components'
import MyTitle from './title.js'
import MyBrank from './brank.js'
import MyAdPicture from './adPicture.js'

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
      img_path: 'https://dummyimage.com/750x420/eee/999',
      title: '000'
    }]
    return (
      <View>
        <ProSwiper banner={data} />
        <MyTitle title='逛过的店' />
        <MyBrank />
        <MyAdPicture />
        <MyTitle title='精选活动' url='/pages/list/index' />
        <MyTitle title='热门商品' />
        <ItemList type='goods' data={data} />
      </View>
    )
  }
}


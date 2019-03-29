import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import MySwiper from '../../components/MySwiper'
import MyList from '../../components/MyList'
import './index.scss'

@inject('apisStore')
@observer

class Index extends Component {

  config = {
    navigationBarTitleText: '企业家俱乐部'
  }

  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render () {
    const { apisStore: { banner } } = this.props
    return (
      <View className='wrap'>
         <MySwiper banner={banner} />
        {
          banner.map((item, index)=>(
            <MyList key={index} />
          ))
        }
      </View>
    )
  }
}

export default Index

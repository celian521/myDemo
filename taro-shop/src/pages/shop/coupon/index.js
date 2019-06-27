
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtIcon, AtTag } from 'taro-ui'
import { ItemList } from '@/components'
import './index.scss'

// @inject()
// @observer
class Coupon extends Component {
    componentDidMount() {
        Taro.setNavigationBarTitle({ title: '门店优惠券' })
    }
    render() {
        return (
            <View >
                <ItemList type='coupon' data={[1, 2, 3, 4, 5, 6, 7, 8]} ></ItemList>
            </View>
        )
    }
}

export default Coupon

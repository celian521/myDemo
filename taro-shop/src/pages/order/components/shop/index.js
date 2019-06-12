import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import Goods from '../goods'
import './index.scss'

export default class CouponModal extends Component {
    constructor() {
        super(...arguments);
    }

    static options = {
        addGlobalClass: true
    }

    render() {
        return (
            <View className='order-shop'>
                <View className='shop-name'>
                    欧式ins旗舰店
                    <View className='at-icon at-icon-chevron-right'></View>
                </View>
                <Goods />
                <View className='total'>
                    <View className='total-item at-row at-row__justify--between'>
                        <View>商品金额</View>
                        <View className='price1'>¥888.00</View>
                    </View>
                    <View className='total-item at-row at-row__justify--between'>
                        <View>实付款</View>
                        <View className='price2'>¥680.00</View>
                    </View>
                </View>
            </View>
        )
    }
}

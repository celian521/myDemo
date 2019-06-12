import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { WhiteSpace } from '@/components'
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
            <View>
                <WhiteSpace />
                <View className='basic-info'>
                    <View>支付方式：在线支付</View>
                    <View>配送方式：门店自提</View>
                    <View>自提地址：番禺广场永旺商城3楼F302</View>
                </View>
                <WhiteSpace />
                <View className='basic-info'>
                    <View>订单编号：2222893899077979</View>
                    <View>创建时间：2019–04-01 18:00:00</View>
                </View>
            </View >
        )
    }
}

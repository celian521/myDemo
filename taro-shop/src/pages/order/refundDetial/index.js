import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { WhiteSpace, CheckBox } from '@/components'
import { AtButton } from 'taro-ui';
import { StatusBar, Goods } from '../components'
import { ORDER_STATUS_ENUM } from '../enums'
import './index.scss'
// @inject()
// @observer
class RefundDetial extends Component {
    constructor() {
        super(...arguments);
    }

    config = {
        navigationBarTitleText: '退款详情'
    }

    render() {

        return (
            <View className='refund-detial'>
                <StatusBar status={ORDER_STATUS_ENUM.REFUND_SUCCESS} />
                <View className='refund-info at-row at-row__justify--between'>
                    <View>退款金额</View>
                    <View className='price'>¥888</View>
                </View>
                <View className='refund-info at-row at-row__justify--between'>
                    <View>退回账户</View>
                    <View className='t-c'>微信钱包</View>
                </View>
                <WhiteSpace type='lg' />
                <View>
                    <View className='block-title'>退款信息</View>
                    <Goods />
                    <View className='refund-info-item'>
                        <View>退款原因：排错了/不喜欢/效果差</View>
                        <View>退款金额： ¥888</View>
                        <View>申请时间：2019-05-15 18:00:00</View>
                        <View>退款编号：2245667896543433</View>
                    </View>
                </View>
                <View className='return-center'>
                    <AtButton className='btn'>返回个人中心</AtButton>
                </View>
            </View>
        )
    }
}

export default RefundDetial

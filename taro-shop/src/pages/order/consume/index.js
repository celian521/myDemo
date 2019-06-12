import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, Image } from '@tarojs/components'
import { WhiteSpace } from '@/components'
import { Goods } from '../components'
import { AtButton } from 'taro-ui'
import './index.scss'
@inject()
@observer
class Consume extends Component {
    constructor() {
        super(...arguments);
    }

    config = {
        navigationBarTitleText: '待消费订单'
    }

    componentDidMount() {
    }

    render() {

        return (
            <View className='consume-detial'>
                <WhiteSpace />
                <Goods />
                <WhiteSpace type='lg' />
                <View className='qrcode-info'>
                    <View className='block-title'>消费二维码</View>
                    <View className='code-info'>
                        <View className='unUseNum'>
                            <View>可使用(1张)</View>
                            <View className='t-c'>有效期至2019-06-15</View>
                        </View>
                        <View className='des'>向商家出示二维码或券号即可消费</View>
                        <Image className='canvas-qrcode' src='http://10.0.3.34:18000/qrcode.png' />
                        <View className='coupon-code'>票券码：4990 1134 2421</View>
                    </View>
                    <View className='AtButton'>
                        <AtButton>申请退款</AtButton>
                    </View>
                </View>
                <WhiteSpace type='lg' />

                <View>
                    <View className='block-text at-row at-row__justify--between'>
                        <View>适用门店</View>
                        <View className='at-icon at-icon-chevron-right'></View>
                    </View>
                    <View className='shop at-row at-row__justify--between at-row__align--center'>
                        <View className='info'>
                            <View>欧式ins旗舰店</View>
                            <View className='t-c at-row at-row__align--center'>
                                <View className='at-icon at-icon-map-pin'></View>
                                <View>番禺广场永旺商场3楼F201</View>
                            </View>
                        </View>
                        <View className='icon icon-mobile'></View>
                    </View>
                </View>
                <WhiteSpace type='lg' />
                <View>
                    <View className='block-text'>订单信息</View>
                    <View className='refund-info-item'>
                        <View className='at-row'>
                            <View className='item-l'>订单编号：</View>2243041003</View>
                        <View className='at-row'>
                            <View className='item-l'>购买手机号：</View>138****0000</View>
                        <View className='at-row'>
                            <View className='item-l'>付款时间：</View>2019-05-25 18:00:00</View>
                        <View className='at-row'>
                            <View className='item-l'>数量：</View>1</View>
                    </View>
                    <View className='refund-info-item'>
                        <View className='at-row'><View className='item-l'>订单总价：</View>¥888</View>
                        <View className='at-row'>
                            <View className='item-l'>实际付款：</View>
                            <View className='price'>¥888</View>
                        </View>
                    </View>
                </View>
                <WhiteSpace type='lg' />
            </View>
        )
    }
}

export default Consume

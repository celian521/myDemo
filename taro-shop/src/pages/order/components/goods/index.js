import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

export default class CouponModal extends Component {
    constructor() {
        super(...arguments);
    }

    static defaultProps = {
        data: [1, 2]
    }

    static options = {
        addGlobalClass: true
    }

    render() {
        const { data } = this.props
        return data && data.map((item, k) => {
            return (
                <View
                    className='goods at-row at-row__align--center at-row__justify--center'
                    key={`goods-item-${k}`}
                >
                    <Image src='http://iph.href.lu/176x176' />
                    <View className='info'>
                        <View className='t'>Musicanvas音乐画布S-BABY蓝牙音响便携小音箱礼物收音机{k}</View>
                        <View className='style'>颜色分类：黑色蓝牙音响+耳机一对</View>
                        <View className='price'>¥ 888.00</View>
                    </View>
                    <View className='t'>x{k+1}</View>
                </View >
            )
        })
    }
}

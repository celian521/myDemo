import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'
import './index.scss'
import { ORDER_STATUS_ENUM } from '../../enums'

export default class CouponModal extends Component {
    constructor() {
        super(...arguments);
    }

    static options = {
        addGlobalClass: true
    }

    render() {
        const { status = 0 } = this.props,
            content = { title: '', des: '' },
            cns = classnames('statusBar', {
                'un-pay': ORDER_STATUS_ENUM.UNPAY == status,
                'deal-close': ORDER_STATUS_ENUM.DEAL_CLOSE == status,
                'success': ORDER_STATUS_ENUM.REFUND_SUCCESS == status ||
                    ORDER_STATUS_ENUM.DEAL_SUCCESS == status
            })

        switch (Number(status)) {
            case ORDER_STATUS_ENUM.UNPAY:
                content.title = '等待买家付款'
                content.des = '订单剩余支付时间：00:30:00'
                break

            case ORDER_STATUS_ENUM.DEAL_CLOSE:
                content.title = '交易关闭'
                content.des = '其他'
                break

            case ORDER_STATUS_ENUM.REFUND_SUCCESS:
                content.title = '退款成功'
                content.des = '2019年6月4日 16:10:21'
                break

            case ORDER_STATUS_ENUM.DEAL_SUCCESS:
                content.title = '交易成功'
                content.des = '消费时间: 2019年6月4日 16:10:13'
                break
            default:
                break
        }

        return content.title && content.des ?
            <View className={cns}>
                <View className='title'>{content.title}</View>
                <View className='des'>{content.des}</View>
            </View>
            : null
    }
}

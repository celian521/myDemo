import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, Button } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtButton } from 'taro-ui'

import { StatusBar, BasicInfo, Shop } from '../components'
import { ORDER_STATUS_ENUM } from '../enums'
import { WhiteSpace, CheckBox } from '@/components'
import './index.scss'
// @inject()
// @observer
class OrderDetial extends Component {
    constructor() {
        super(...arguments);
    }

    config = {
        navigationBarTitleText: '订单详情'
    }

    state = {
        checkItemValue: 1,
        checkList: [1, 2, 3, 4, 5],
        isOpened: false,
    }

    confirmCancelOrderHandle = id => {
        console.log('确认取消订单');
        this.handleClose();
    }

    openCanelOrderModal = () => {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    handleClose = () => {
        this.setState({
            isOpened: false
        })
    }

    chcekedClickHandle = v => {
        if (v === this.state.checkItemValue) {
            return this.setState({
                checkItemValue: null
            })
        }
        this.setState({
            checkItemValue: v
        })
    }

    render() {
        const { status } = this.$router.params,
            { checkList, checkItemValue } = this.state

        return (
            <View>
                <StatusBar status={status} />
                <View className='account-info at-row'>
                    <View>巴啦啦小魔仙</View>
                    <View>136123438000</View>
                </View>
                <WhiteSpace />
                <Shop />
                <BasicInfo data={{}} />
                <OperationBar status={status} />
                <WhiteSpace type='lg' />
                {
                    [ORDER_STATUS_ENUM.DEAL_CLOSE.toString(),
                    ORDER_STATUS_ENUM.REFUND_SUCCESS.toString(),
                    ORDER_STATUS_ENUM.DEAL_SUCCESS.toString()].includes(status) &&
                    <View className='return-center'>
                        <AtButton className='btn'>返回个人中心</AtButton>
                    </View>
                }
                {
                    ORDER_STATUS_ENUM.UNPAY == status &&
                    <View className='operation at-row at-row__justify--end'>
                        <View className='cancel-btn' onClick={this.openCanelOrderModal}>取消订单</View>
                        <View className='buy-btn'>立即支付</View>
                    </View>
                }

                <AtModal
                    isOpened={this.state.isOpened}
                    onClose={this.handleClose}
                >
                    <AtModalHeader>请选择取消订单的理由</AtModalHeader>
                    <AtModalContent>
                        {
                            checkList && checkList.map((item, k) => {
                                return (
                                    <View
                                        className='cancel-item at-row at-row at-row__justify--between'
                                        key={k}
                                        onClick={() => {
                                            this.chcekedClickHandle(k)
                                        }}
                                    >
                                        <View>拍错了{k}</View>
                                        <View>
                                            <CheckBox checked={checkItemValue == k} onClick={() => {
                                                this.chcekedClickHandle(k)
                                            }}></CheckBox>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </AtModalContent>
                    <AtModalAction>
                        <Button onClick={this.handleClose}>取消</Button>
                        <Button onClick={this.confirmCancelOrderHandle}>确定</Button>
                    </AtModalAction>
                </AtModal>
            </View>
        )
    }
}

export default OrderDetial

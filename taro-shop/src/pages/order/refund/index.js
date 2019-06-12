import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { Goods } from '../components'
import { WhiteSpace, CheckBox } from '@/components'
import './index.scss'
import { AtButton } from 'taro-ui';
@inject()
@observer
class Refund extends Component {
    constructor() {
        super(...arguments);
    }

    config = {
        navigationBarTitleText: '申请退款'
    }

    state = {
        checkItemValue: 1,
        checkList: [1, 2, 3, 4, 5],
        isOpened: false,
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
            <View className='refund'>
                <View className='tips'>退款成功后，购买获得的积分将被扣除</View>
                <WhiteSpace />
                <View>
                    <Goods />
                    <View className='refund-info at-row at-row__justify--between'>
                        <View>退款金额</View>
                        <View className='price'>¥888</View>
                    </View>
                </View>
                <View className='reason'>退款原因（必选）</View>
                <View>
                    {
                        checkList && checkList.map((item, k) => {
                            return (
                                <View
                                    className='reason-item at-row at-row at-row__justify--between'
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
                </View>
                <View className='opt-btn'>
                    <View>退款申请一经提交后不可撤销</View>
                    <AtButton type='primary'>确认退款</AtButton>
                </View>
            </View>
        )
    }
}

export default Refund

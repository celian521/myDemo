/**
 * 详情页面
 */
import Taro, { Component } from '@tarojs/taro'

import { ScrollView, View, Text, Image } from '@tarojs/components'
import { AtModal, AtButton, AtInputNumber } from 'taro-ui'

class SpecificationModal extends Component {
    constructor(props) {
        super(...arguments);

        const { isOpened } = props;
        this.state = {
            _isOpened: isOpened
        };
    }
    state = {
        _isOpened: false,
        quantity: 1
    }

    static options = {
        addGlobalClass: true
    }

    componentWillReceiveProps(nextProps) {
        const { isOpened } = nextProps

        if (isOpened !== this.state._isOpened) {
            this.setState({
                _isOpened: isOpened
            });
        }
    }

    handleClose = () => {
        this.props.onClose && this.props.onClose()
    }
    handleChange(quantity) {
        this.setState({
            quantity
        })
    }

    render() {
        const { _isOpened, quantity } = this.state
        const { onClose } = this.props

        return (
            <AtModal isOpened={_isOpened} onClose={onClose} className='specification-modal'>
                <View className='spec-base'>
                    <Image src={'http://iph.href.lu/216x216'} className='image' />
                    <View className='price at-row at-row__align--center'>
                        <View className='d-t'>¥888</View>
                        <View className='k-t t-d-lt'>¥1288</View>
                    </View>
                    <View className='k-t'>库存:20</View>
                    <View className='at-icon at-icon-close' onClick={this.handleClose}></View>
                </View>
                <View className='color-size'>
                    <Text className='t'>颜色</Text>
                    <View className='size-opts'>
                        <View className='item'>黑色蓝牙音响+耳机一对</View>
                        <View className='item'>黑色蓝牙音响</View>
                        <View className='item'>耳机一对</View>
                    </View>
                </View>
                <View className='at-row at-row__align--center at-row__justify--between'>
                    <View className='t'>颜色</View>
                    <View>
                        <AtInputNumber
                            min={0}
                            max={10}
                            step={1}
                            width={96}
                            value={quantity}
                            onChange={this.handleChange.bind(this)}
                        />
                    </View>
                </View>
                <View className='confirm-btn'>
                    <AtButton type='primary'>请选择规格</AtButton>
                </View>
            </AtModal>
        )
    }
}

export default SpecificationModal

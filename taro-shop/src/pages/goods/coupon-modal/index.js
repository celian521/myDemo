/**
 * 详情页面
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import { ScrollView, View } from '@tarojs/components'
import { AtModal, AtButton } from 'taro-ui'

import { ItemList } from '@/components'

class CouponModal extends Component {
    constructor(props) {
        super(...arguments);

        const { isOpened } = props;
        this.state = {
            _isOpened: isOpened
        };
    }
    state = {
        _isOpened: false
    }

    static options = {
        addGlobalClass: true
    }

    componentWillReceiveProps(nextProps) {
        const { isOpened } = nextProps;

        if (isOpened !== this.state._isOpened) {
            this.setState({
                _isOpened: isOpened
            });
        }
    }

    handleClose = () => {
        this.props.onClose && this.props.onClose()
    }

    render() {
        const { _isOpened } = this.state
        const { onClose } = this.props

        return (
            <AtModal isOpened={_isOpened} onClose={onClose} className='coupon-modal'>
                <View className='title'>
                    领券
                    <View className='at-icon at-icon-close' onClick={this.handleClose}></View>
                </View>
                <ScrollView style={{ height: '674rpx' }} scrollY={true}>
                    <ItemList type='coupon' data={[1, 2, 3, 4, 5, 6, 7, 8]} ></ItemList>
                </ScrollView>
                <View className='confirm-btn'>
                    <AtButton type='primary'>确 定</AtButton>
                </View>
            </AtModal>
        )
    }
}

export default CouponModal

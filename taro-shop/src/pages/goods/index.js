/**
 * 详情页面
 */
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components'
import { AtTag } from 'taro-ui'

import CouponModal from './coupon-modal';
import SpecificationModal from './specification-modal';
import './index.scss'

@inject()

@observer
class Goods extends Component {
    constructor() {
        super(...arguments);
    }

    state = {
        _isCouponOpened: false,
        _isSpecificationOpened: true
    }

    config = {
        navigationBarTitleText: '商品详情'
    }

    openCouponModal = () => {
        this.setState({
            _isCouponOpened: true
        })
    }
    openSpecificationModal = () => {
        this.setState({
            _isSpecificationOpened: true
        })
    }

    handleClose = () => {
        this.setState({
            _isCouponOpened: false,
            _isSpecificationOpened: false
        })
    }


    render() {
        const { _isCouponOpened, _isSpecificationOpened } = this.state
        console.log(_isCouponOpened, _isSpecificationOpened)

        return (
            <View className='goods-detial'>
                <View className='swiper-images'>
                    <Swiper
                        className=''
                        indicatorColor='#999'
                        indicatorActiveColor='#333'
                        circular
                        indicatorDots
                        autoplay>
                        <SwiperItem>
                            <Image src='http://iph.href.lu/750x560'></Image>
                        </SwiperItem>
                        <SwiperItem>
                            <Image src='http://iph.href.lu/650x560'></Image>
                        </SwiperItem>
                        <SwiperItem>
                            <Image src='http://iph.href.lu/550x560'></Image>
                        </SwiperItem>
                    </Swiper>
                    <View className='share'>
                        <View className='icon icon-share'></View>
                    </View>
                </View>
                <View className='sale-tips'>下方可领券，领券后再省400元，到手价8</View>
                {/* 商品信息 */}
                <View className='goods-info'>
                    <View className='at-row at-row__align--center at-row__justify--between'>
                        <View className='price'>¥1288</View>
                        <View className='out'>已售232件</View>
                    </View>
                    <View className='at-row at-row__align--center at-row__justify--between open-vip'>
                        <View>
                            <View className='vip-price'>
                                <Image src='http://10.0.3.34:18000/icon/vip.svg' className='vip-svg' />
                                VIP会员价 <Text className='out-t'>¥888</Text> ，可省¥400
                            </View>
                            <View className='vip-des'>开通VIP会员，专享会员大礼包权益</View>
                        </View>
                        <View className='open-btn'>立即开通</View>
                    </View>
                    <View className='at-row at-row__justify--between'>
                        <View className='info'>
                            <View className='title'>
                                <Text className='status'>预 售</Text>
                                Musicanvas音乐画布S-BABY蓝牙音响便携小音箱礼物收音机
                            </View>
                            <View className='digest'>专业听歌的智能音箱；澎湃低音还原人声，真实耐听；</View>
                            <View className='predict'>预计2019-06-01现货</View>
                        </View>
                        <View className='collect'>
                            <View className='icon icon-collect'></View>
                            <View className='t'>关注</View>
                        </View>
                    </View>
                </View>
                {/* 商品配置 */}
                <View className='goods-config'>
                    <View
                        className='at-row at-row__align--center at-row__justify--between item'
                        onClick={this.openCouponModal}
                    >
                        <View>领券</View>
                        <View className='min-coupon at-row'>
                            <View className='minus-pirce'>¥ 30</View>
                            <View className='full-text'>满1000元可用</View>
                        </View>
                        <View className='min-coupon at-row'>
                            <View className='minus-pirce'>¥ 50</View>
                            <View className='full-text'>满1500元可用</View>
                        </View>
                        <View className='at-icon at-icon-chevron-right'></View>
                    </View>
                    <View className='at-row at-row__align--center item'>
                        <View>配送</View>
                        <View className='logistics-text'>门店自提</View>
                    </View>
                    <View
                        className='at-row at-row__align--center at-row__justify--between item'
                        onClick={this.openSpecificationModal}
                    >
                        <View>请选择规格数据</View>
                        <View className='at-icon at-icon-chevron-right'></View>
                    </View>
                </View>
                {/* 商品详情 */}
                <View className='introduce'>
                    <View className='at-row at-row__align--center at-row__justify--between shop-info'>
                        <View >
                            <Image src='http://iph.href.lu/72x72' />
                            <Text>JBL音响旗舰店(永旺店）</Text>
                        </View>
                        <View className='enter'>进店</View>
                    </View>
                    <View className='at-row at-row__justify--center title'>
                        商品详情
                    </View>
                </View>
                {/* 底部购买操作栏 */}
                <View className='operation-tabBar at-row'>
                    <View className='shop'>
                        <View >
                            <View className='icon icon-store'></View>
                            <View className='t'>店铺</View>
                        </View>
                        <View>
                            <View className='at-icon at-icon-shopping-cart'></View>
                            <View className='t'>购物车</View>
                        </View>
                    </View>
                    <View className='joinCart'>加入购物车</View>
                    <View className='buyBtn'>马上购买</View>
                </View>
                <CouponModal isOpened={_isCouponOpened} onClose={this.handleClose} />
                <SpecificationModal isOpened={_isSpecificationOpened} onClose={this.handleClose} />
            </View>
        )
    }
}

export default Goods


import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import linkTo from '@/utils/linkTo'
import { ItemList } from '@/components'
import './index.scss'

// @inject()
// @observer
class ShopMain extends Component {
    componentDidMount() {
        Taro.setNavigationBarTitle({ title: '门店入口' })
    }
    toMap() {
        Taro.openLocation({
            longitude: 113.324520,
            latitude: 23.099994,
            scale: 18
        })
    }
    render() {
        return (
            <View className='shop-main'>
                <View className='at-row info'>
                    <View className='at-col at-col-1 at-col--auto'>
                        <Image className='img' />
                    </View>
                    <View className='at-col shop-name'>
                        <View className='at-row'>
                            <View className='at-col at-col-9'>
                                九毛九山西面馆(永旺店)
                            </View>
                            <View className='at-row at-row__justify--end'>
                                <AtIcon className='mg-right' value='search' size='20' ></AtIcon>
                                <AtIcon value='shopping-cart' size='20' ></AtIcon>
                                {/* <View className='icon icon-cart'></View> */}
                            </View>
                        </View>
                        <View className='shop-type'>餐饮店</View>
                    </View>
                </View>

                <View className='at-row address'>
                    <View className='at-col at-col-9 detial'>番禺广场永旺商城3楼F305</View>
                    <View className='at-col nav' onClick={this.toMap}>
                        <View className='icon icon-navigate'></View>
                        <View className='t'>导 航</View>
                    </View>
                    <View className='split'></View>
                    <View className='at-col phone'>
                        <View className='icon icon-mobile'></View>
                        <View className='t'>电 话</View>
                    </View>
                </View>

                <View className='at-row tabs' >
                    <View className='item active'>
                        商品
                    </View>
                    <View className='item'>
                        优惠
                    </View>
                    <View className='item'>
                        活动
                    </View>
                </View>
                <View
                    className='at-row at-row__justify--between choiceness'
                    onClick={() => { linkTo({ url: '/pages/shop/featured/index' }) }}
                >
                    <View className='at-col block-text'>
                        精选商品
                        </View>
                    <View className='at-col t-r'>
                        <View className='at-icon at-icon-chevron-right'></View>
                    </View>
                </View>
                {/* <View className='at-row at-row--wrap list'>
                        <View className='item'>
                            <Image />
                            <View className='name'>精选京都二斤酱骨架</View>
                            <View className='des'>有滋有味香到吮指的酱骨架，浓郁酱香二斤骨架</View>
                            <View className='at-row at-row__justify--between '>
                                <View className='price'>￥45</View>
                                <View className='tags'>
                                    <AtTag size='small' type='primary' active={true}>券</AtTag>
                                    <AtTag size='small' active={true}>预 售</AtTag>
                                </View>
                            </View>
                        </View>
                    </View> */}
                <ItemList type='goods' data={[1, 2, 3, 4]} />
                <View
                    className='at-row at-row__justify--between coupon'
                    onClick={() => { linkTo({ url: '/pages/shop/coupon/index' }) }}
                >
                    <View className='at-col block-text'>
                        优惠券
                        </View>
                    <View className='at-col t-r'>
                        <View className='at-icon at-icon-chevron-right'></View>
                    </View>
                </View>
                <ItemList type='coupon' data={[1, 2, 3]} />
                <View
                    className='at-row at-row__justify--between activity'
                    onClick={() => { linkTo({ url: '/pages/shop/activity/index' }) }}
                >
                    <View className='at-col block-text'>
                        精彩活动
                        </View>
                    <View className='at-col t-r'>
                        <View className='at-icon at-icon-chevron-right'></View>
                    </View>
                </View>
                <ItemList type='activity' data={[1, 2, 3]} />
            </View>
        )
    }
}

export default ShopMain

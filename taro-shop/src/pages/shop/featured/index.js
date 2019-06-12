
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtIcon, AtTag } from 'taro-ui'
import { ItemList } from '@/components'
import './index.scss'

@inject()
@observer
class Featured extends Component {
    componentDidMount() {
        Taro.setNavigationBarTitle({ title: '精选商品' })
    }
    render() {
        return (
            <View className='featured'>
                <View className='at-row at-row__justify--between tabs' >
                    <View className='filter at-row '>
                        <View className='item active'>
                            新品
                        </View>
                        <View className='item'>
                            销售
                        </View>
                        <View className='item'>
                            价格
                            <View className='filter-sort filter-sort-asc'></View>
                        </View>
                    </View>
                    <View>
                        <AtIcon className='mg-right' value='search' size='20' ></AtIcon>
                        <AtIcon value='shopping-cart' size='20' ></AtIcon>
                    </View>
                </View>
                <ItemList type='goods' data={[1, 2, 3, 4, 5, 6, 7, 8]} ></ItemList>
            </View>
        )
    }
}

export default Featured

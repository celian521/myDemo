import { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

export default class WhiteSpace extends Component {
    constructor() {
        super(...arguments)
    }
    static defaultProps = {
        type: 'sm'
    }
    render() {
        const { type } = this.props
        return (
            <View className={`whitespace-${type}`} ></View>
        )
    }
}


import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components'

export default WrappedComponent => class D extends Component {
    // ref={this.aaa.bind(this)}
    // aaa(inc){
    //     inc.getName();
    // }
    constructor(props){
        super(props)
        // this.state={
        //     value: ''
        // }
    }
    componentWillMount() {
        console.log('my is DDDkefauttoasdfie')
    }
    // onInputChange = e => {
    //     console.log("e", this.state.value)
    //     this.setState({
    //         value:e.target.value
    //     })
    // }
    render() {

        return (
          <View>
            {/* {title} */}
            ==
            <WrappedComponent ye='1000' />
            --
          </View>
        );
    }

}

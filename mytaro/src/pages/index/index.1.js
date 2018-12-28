import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import Bar from '../../components/bar.js';
import All from '../../components';

// import './index.scss'


@inject('counterStore')

@observer
class Index extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   a: "Bar",
    //   b: "Bas"
    // };
  }

  config = {
    navigationBarTitleText: '首页'
  }

  // increment = () => {
  //   const { counterStore } = this.props
  //   counterStore.increment()
  // }

  // decrement = () => {
  //   const { counterStore } = this.props
  //   counterStore.decrement()
  // }

  // incrementAsync = () => {
  //   const { counterStore } = this.props
  //   counterStore.incrementAsync()
  // }

  changecom = (v) => {
    console.log(v)
    const { counterStore } = this.props
    counterStore.changecom(v)
  }

  render () {
    // const { counterStore: { counter } } = this.props

    const TestCom = All[this.props.counterStore.name]
    // const TestComa = All[this.state.a]
    const dat = {
      a:'100',
      b:'200'
    }
    return (
      <View>
        {console.log(this.props.counterStore.name)}
        {/* <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text> */}


        {/* {this.props.counterStore.loading && <TestCom />} */}
        <TestCom ...dat />
        {/* <TestCom /> */}
        {this.props.counterStore.loading}
        <Text>name: {this.props.counterStore.name}</Text>
        <Button onClick={this.changecom.bind(this, 'bas')}>Add Async</Button>

      </View>
    )
  }
}

export default Index

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {getEvent}  from  '../../utils/common';

const  myEvent=getEvent();

export default class B extends Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }
  config = {
    navigationBarTitleText: 'EMIT'
  }
  componentWillMount() {
    //console.log(this.$router)
  }
  componentDidMount(){

    myEvent.on("addcut",()=>{
      //菜品发生变化
      console.log('BBBB EMIT =');

    })
 }

  add = () => {
    myEvent.emit("addcut")
  }
  render () {
    return (
      <View>
        <View onClick={this.add}>
          BBBBBB ADD
        </View>
      </View>
    )
  }
}

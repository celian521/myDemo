import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import  { getEvent }  from  '../../utils/common';

let events=getEvent();

export default class A extends Component {
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

	   events.on("addcut",()=>{
       //菜品发生变化
       console.log('addcutRETURR');

	   })
  }

  render () {
    return (
      <View>
        AAAAAA
      </View>
    )
  }
}

import Taro, { Component, Events  } from '@tarojs/taro'
import { View } from '@tarojs/components'

const events = new Events()

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

    events.on('doSth', (...arg) => {
      console.log("DOSTH", arg);

      // doSth
    })

 }

  add = () => {
    events.trigger("doSth", "KKK", "bbb")
  }
  render () {
    return (
      <View>
        <View onClick={this.add}>
          CCCCC ADD
        </View>
      </View>
    )
  }
}

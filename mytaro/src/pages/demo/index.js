import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

// import TplDemo from '../../components/template';


@inject(({nodeStore})=>({
  tplData: nodeStore.tplData,
}))

@observer
class DemoIndex extends Component {
  constructor (props) {
    super(props);
    this.state = {
      current: 0
    }
  }
  config = {
    navigationBarTitleText: '模板'
  }
  componentWillMount() {
    //console.log(this.$router)
  }
  render () {
    return (
      <View>
        ddd
        {/* <TplDemo nodeData={this.props.tplData} /> */}
      </View>
    )
  }
}

export default DemoIndex

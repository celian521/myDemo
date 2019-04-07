import Taro, { Component } from '@tarojs/taro'
import { AtForm, AtInput, AtButton  } from 'taro-ui'
import { View } from '@tarojs/components'
import { MyScroll, ItemList } from '@components'
import apis from '@apis'
import './index.scss'

class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      dataNewsList: []
    }
  }
  config = {
    navigationBarTitleText: 'DEMO'
  }
  componentDidMount() {
    this.load()
  }
  load = () => {
      apis.getList({ news_type: 2, page: 1, pageSize: 10 }).then(res => {
        if (res.data) {
          const { dataNewsList } = this.state
          this.setState({
            dataNewsList: [ ...dataNewsList, ...res.data.list ]
          })
        }
      })
  }


  onPull() {//上拉
    console.log('上拉=')
    this.load()
    // this.props.onPull()
  }
  onDown() {//下拉
    console.log('下拉=')
    // this.props.onDown()
  }
  onUpper() { //滚动到顶部事件
    console.log('滚动到顶部事件=')
    // this.props.Upper()
  }
  onLower() { //滚动到底部事件
    console.log('滚动到底部事件=')
    // this.props.Lower()
  }


  render() {
    const { dataNewsList } = this.state
    return (
      <View className='wrap'>

        <MyScroll
          onUpper={this.onUpper}
          onLower={this.onLower}
          onDown={this.onDown}
          onPull={this.onPull}
        >
          <ItemList data={dataNewsList} />
        </MyScroll>
      </View>
    )
  }
}

export default Index


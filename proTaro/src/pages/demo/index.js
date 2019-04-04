import Taro, { Component } from '@tarojs/taro'
import { AtForm, AtInput, AtButton  } from 'taro-ui'
import { View } from '@tarojs/components'
import { MyScroll, ImagesList } from '@components'
import apis from '@apis'
import './index.scss'

class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      value: '',
      value2: '',
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
            dataNewsList: [ ...dataNewsList, ...res.data ]
          })
        }
      })
  }

  handleChange = (value) => {
    this.setState({
      value
    })
  }
  onSubmit = (event) => {
    console.log(event)
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
        {/* <AtForm
          onSubmit={this.onSubmit.bind(this)}
        >
            <AtInput
              name='value'
              title='文本'
              type='text'
              placeholder='单行文本'
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />
            <AtInput
              name='value2'
              title='文本'
              type='text'
              placeholder='单行文本'
              value={this.state.value2}
              onChange={this.handleChange.bind(this)}
            />
            <AtButton formType='submit' type='primary'>提交</AtButton>
          </AtForm> */}
        <MyScroll
          onUpper={this.onUpper}
          onLower={this.onLower}
          onDown={this.onDown}
          onPull={this.onPull}
        >
          <ImagesList dataList={dataNewsList} />
        </MyScroll>
      </View>
    )
  }
}

export default Index


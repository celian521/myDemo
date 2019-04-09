import Taro, { Component } from '@tarojs/taro'
// import { observer, inject } from '@tarojs/mobx'
import { View, Text } from '@tarojs/components'
import { AtCalendar } from 'taro-ui'
import { MySwiper } from '@components'
import apis from '@apis'
import linkTo from '@utils/linkTo'
import './index.scss'

class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      dataBanner: [],
      marksDate: [],
      dataList: [],
      onTime: '',
      falg: false
    }
  }
  config = {
    navigationBarTitleText: '活动策划'
  }

  componentDidMount() {
    const date = new Date()
    const y = date.getFullYear(),
      m = date.getMonth() + 1,
      d = date.getDate()
    const time = `${y}-${m}-${d}`
    this.setState({
      onTime: time
    }, () => { this.fetchData() })
    this.fetchBanner()
  }
  /**
   * 获取数据
   */
  fetchBanner = () => {
    apis.getPage({ page_path: this.$router.path }).then(({ data }) => {
      this.setState({
        dataBanner: data[1]
      })
    })
  }
  // 返回时间段
  fmtDate = strDate => {
    const date = new Date(strDate)
    let y = date.getFullYear(),
      m = date.getMonth() + 1,
      yy = y,
      mm = m + 1
    if (mm > 12) {
      mm = 1
      yy = yy + 1
    }
    const start_day = `${y}-${m}-1`
    const end_day = `${yy}-${mm}-1`
    return { start_day, end_day }
  }

  fetchData = () => {
    const { onTime } = this.state
    console.log('onTime:',onTime)
    apis.getList({ news_type: 9, page: 1, ...this.fmtDate(onTime), pageSize: 1000 }).then(({ data }) => {
      let temp = []
      for (let item of data.list) {
        temp.push({ value: item.start_day })
      }
      this.setState({
          dataList: data.list,
          marksDate: temp,
          falg: true
      })
    })
  }

  onDayClick = ({ value }) => {
    this.setState({
      onTime: value
    })
  }

  onMonthChange = value => {
    console.log(value)
    this.setState({
      onTime: value
    }, () => { this.fetchData() })
  }

  handerLink = id => {
    const url = `/pages/news/index`
    let params = { id } //文章ID
    linkTo({ url, params })
  }

  render() {
    let { dataBanner, marksDate, dataList, onTime, falg } = this.state
    return (
      <View className='wrap'>
        <MySwiper banner={dataBanner} />
        { falg && <AtCalendar
          key='calendar'
          currentDate={onTime}
          onDayClick={this.onDayClick.bind(this)}
          onMonthChange={this.onMonthChange.bind(this)}
          marks={marksDate}
        /> }
        <View className='onTimeNews'>
          { dataList.map(item => (
            onTime === item.start_day &&
            <View key={item.id} className='newsLi' onClick={this.handerLink.bind(this, item.id)}>
              <Text>{ item.title }</Text>
              <Text className='more'>[查看更多]</Text>
            </View>
          )) }
        </View>
      </View>
    )
  }
}

export default Index

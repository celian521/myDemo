import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View, Text } from '@tarojs/components'
import { AtCalendar } from 'taro-ui'
import { MySwiper } from '@components'
import apis from '@apis'
import linkTo from '@utils/linkTo'
import './index.scss'

@inject('globalStore')
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    let date = new Date()
    let y = date.getFullYear(),
      m = date.getMonth() + 1,
      d = date.getDate()
    if(m<10) m = `0${m}`
    if(d<10) d = `0${d}`
    this.state = {
      dataBanner: [],
      marksDate: [],
      dataList: [],
      onTime: `${y}-${m}-${d}`
    }
  }
  config = {
    navigationBarTitleText: '活动策划'
  }

  componentWillMount() {
    this.fetchBanner()
    this.fetchData()
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
  fmtDate = (strDate) => {
    let date = new Date(strDate)
    let y = date.getFullYear(),
      m = date.getMonth() + 1,
      yy = y,
      mm = m + 1
    if (mm > 12) {
      mm = 1
      yy = yy + 1
    }
    if(m<10) m = `0${m}`
    if(mm<10) mm = `0${mm}`
    const start_day = `${y}-${m}-01`
    const end_day = `${yy}-${mm}-01`
    return { start_day, end_day }
  }

  fetchData = () => {
    const { onTime } = this.state
    let params = { news_type: 9, page: 1, ...this.fmtDate(onTime), pageSize: 1000 }
    apis.getList(params).then(({ data }) => {
      let temp = []
      for (let item of data.list) {
        temp.push({ value: item.start_day })
      }
      this.setState({
        dataList: data.list,
        marksDate: temp
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
    let { dataBanner, marksDate, dataList, onTime } = this.state
    return (
      <View className='wrap'>
        <MySwiper banner={dataBanner} />
        <AtCalendar
          key='calendar'
          currentDate={onTime}
          onDayClick={this.onDayClick.bind(this)}
          onMonthChange={this.onMonthChange.bind(this)}
          marks={marksDate}
        />
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

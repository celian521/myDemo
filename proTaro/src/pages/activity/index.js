import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'
import { AtCalendar } from 'taro-ui'
import { MySwiper } from '@components'
import apis from '@apis'
import './index.scss'

@inject('globalStore')

@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      dataBanner: [],
      value:''
    }
  }
  config = {
    navigationBarTitleText: '活动策划'
  }
  componentDidMount() {
    this.fetchBanner()
    this.fetchData()
  }
  /**
   * 获取数据
   */
  fetchBanner = () => {
    apis.getPage({ page_path: this.$router.path }).then(({data}) => {
      this.setState({
          dataBanner: data[1]
      })
    })
  }
  fetchData = () => {
    apis.getList({ news_type: 9, page:1, pageSize:1000 }).then(({ data }) => {
      console.log(data);

      // start_day
    })
  }

  onDayClick = ({value}) => {
    console.log('data', value)
    this.setState({
      value
    })
  }
  onMonthChange = value => {
    console.log('mon', value)
    this.setState({
      value
    })
  }

  render() {
    const { dataBanner, value } = this.state
    return (
      <View className='wrap'>
        <MySwiper banner={dataBanner} />
        <AtCalendar
          key='att'
          minDate='2019/4/1'
          onDayClick={this.onDayClick.bind(this)}
          onMonthChange={this.onMonthChange.bind(this)}
          marks={[ { value: '2019/3/11' }, { value: '2019/4/11' },{ value: '2019/4/10' },{ value: '2019/4/12' } ]}
        />
        <View>
          {value}
        </View>
      </View>
    )
  }
}

export default Index

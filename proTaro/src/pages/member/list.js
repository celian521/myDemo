import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtLoadMore  } from 'taro-ui'
import { ItemList } from '@components'
import apis from '@apis'
// import PropTypes from 'prop-types';
import './index.scss';

export default class List extends Component {

  componentDidMount() {
    this.fetchData()
  }
  constructor() {
    super(...arguments);
    this.state = {
      dataList: [],
      status: true
    }
  }
  fetchData = () => {
    apis.getList({ news_type: 1, page: 1, pageSize: 10 }).then(({data}) => {
      this.setState({
        dataList: data.list,
        status: false
      })
    }).catch(err => {
      this.setState({
        status: false
      })
      console.warn('err', err)
    })
  }
  render() {
    const { dataList, status } = this.state;
    return (
      <View>
        <ItemList data={dataList} type='card' />
        <AtLoadMore status={status?'loading':'noMore'} />
      </View>
    )
  }
}


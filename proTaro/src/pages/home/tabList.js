
import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtLoadMore  } from 'taro-ui'
import { ItemList } from '@components'
import PropTypes from 'prop-types';
import apis from '@apis'
import './index.scss';

export default class TabList extends Component {
  static propTypes = {
    newsType: PropTypes.number,
    hasFetch: PropTypes.bool
  };

  static defaultProps = {
    newsType: 1,
    hasFetch: true
  };

  constructor() {
    super(...arguments);
    this.state = {
      dataList: [],
      status: true
    }
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData = () => {
    const { newsType } = this.props
    apis.getList({ news_type: newsType, page: 1, pageSize: 10 }).then(({data}) => {
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
    const { status, dataList } = this.state
    return (
      <View>
        <ItemList data={dataList} type='news' />
        <AtLoadMore status={status?'loading':'noMore'} />
      </View>
    )
  }
}


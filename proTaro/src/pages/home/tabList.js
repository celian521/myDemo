
import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtLoadMore  } from 'taro-ui'
import { NewsList } from '@components'
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
      console.log(data)
      this.setState({
        dataList: data
      })
    })
  }
  render() {
    const { status, dataList } = this.state
    return (
      <View>
        <NewsList dataList={dataList} />
        {/* <AtLoadMore status={status?'loading':'noMore'} /> */}
      </View>
    )
  }
}


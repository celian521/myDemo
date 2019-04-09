
/**
 *  列表 滚动加载
 *
  config = {
    "enablePullDownRefresh": true,
    onReachBottomDistance:30
  }

  onPullDownRefresh() {
    this.ScrollList.init()
    Taro.stopPullDownRefresh()
  }

  onReachBottom() {
    this.ScrollList.load()
  }

  <ScrollList type='news' newsType={1} ref={node => this.ScrollList = node} />
 */
import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtLoadMore } from 'taro-ui'
import { ItemList } from '@components'
import PropTypes from 'prop-types';
import apis from '@apis'
import './index.scss';

export default class TabList extends Component {
  static propTypes = {
    newsType: PropTypes.number,
    type: PropTypes.string,
    pageSize: PropTypes.number,
    loadMore: PropTypes.bool
  };

  static defaultProps = {
    type: 'news',
    newsType: 1,
    pageSize: 10,
    loadMore: true
  };

  constructor() {
    super(...arguments);
    this.state = {
      page: 1,
      total: 0,
      list: [],
      status: false
    }
  }

  componentDidMount() {
    this.init()
  }
  init = () => {
    this.setState({
      page: 1,
      total: 0,
      list: [],
      status: true
    }, () => {
      this.load()
    });
  }
  load = () => {
    const { list, page, status } = this.state
    const { pageSize, newsType } = this.props
    console.log('loadlist', newsType);
    if (!status) return
    apis.getList({ news_type: newsType, page, pageSize }).then(({ data }) => {
      this.setState({
        page: page + 1,
        total: data.total,
        list: [...list, ...data.list]
      }, () => {
        const allList = this.state.list
        if (this.state.total <= allList.length) {
          this.setState({
            status: false
          })
        }
      })
      //  end
    }).catch(err => {
      this.setState({
        status: false
      })
      console.warn('err', err)
    })
  }
  render() {
    const { status, list } = this.state
    const { type, loadMore } = this.props
    return (
      <View>
        <ItemList data={list} type={type} />
        { loadMore && <AtLoadMore status={status ? 'loading' : 'noMore'} /> }
      </View>
    )
  }
}


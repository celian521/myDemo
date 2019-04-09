
/**
 *  @Title   details
 *  @Auther  Stephen WU
 *  @Des     描述
 *  @Time    2019
 */
import Taro, { Component } from '@tarojs/taro'
import { View, RichText, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { Base64 } from 'js-base64';
import apis from '@apis'
import './index.scss'


@inject('globalStore')

@observer
class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      id: '',
      title: 'loading...',
      content: '',
      img_url: '',
      note: '',  // 文章简介
    };
  }
  config = {
    navigationBarTitleText: '...'
  }

  componentWillMount() {
    const { id } = this.$router.params
    apis.getDetails({ id }).then(({ data }) => {
      Taro.setNavigationBarTitle({
        title: data.title
      })
      this.setState({
        id,
        title: data.title,
        content: Base64.decode(data.context),
        note: data.note,
        img_url: data.img_url
      })
    })
  }


  render() {
    const { title, content, note, img_url } = this.state
    return (
      <View className='at-article'>
        <View className='at-article__h1'>{ title }</View>
        <View className='at-article__content'>
          <View className='at-article__section'>

            <View className='at-article__info'>{ note }</View>
            <Image className='at-article__img' src={img_url} lazyLoad mode='widthFix' />
            <View className='at-article__p'>
              <RichText nodes={content} />
            </View>

          </View>
        </View>
      </View>

    )
  }
}

export default Index
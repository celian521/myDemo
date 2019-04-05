import Taro, { Component } from '@tarojs/taro';
import { View, RichText } from '@tarojs/components';
import { AtDivider } from 'taro-ui'
import PropTypes from 'prop-types';
import './index.scss';

export default class Serve extends Component {
  static propTypes = {
    banner: PropTypes.array
  };

  static defaultProps = {
    banner: []
  };

  render() {
    const {  } = this.props;
    const content = `<div>
    <h3>第一条：入会条件</h3>
    <br />
    <p>（1）遵守国家各项法律法规，弘扬社会正能量；</p>
    <p>（2）热爱旗袍文化和中国传统文化，具有奉献精神，乐于参与社会公益活动；</p>
    <p>（3）若加入的主体为社会组织，必须为法人单位，具有相关政府批准文件；若加入的主体为个人的，必须年满18周岁以上；</p>
    <p>（4）加入本协会，必须有本协会会员推荐；</p>
    <p>（5）加入本协会是自愿的；</p>
    <p>（6）认可本协会组织章程；</p>
    <p>（7）履行本协会会员义务。</p>

    <h3>第二条：会员履行下列义务</h3>
    <br />
    <p>（1）执行本协会的决议；</p>
    <p>（2）维护本协会合法权益；</p>
    <p>（3）完成本协会交办的工作；</p>
    <p>（4）按规定交纳会费；</p>
    <p>（5）向本协会反映情况，提供有关资料；</p>
    <p>（6）接受本会的指导、监督、检查和培训。</p>
    </div>
    `
    return (
      <View className='aboutDetails'>
        <AtDivider content='会员入会条件及服务' lineColor='#855498' fontColor='#666666' />
        <RichText nodes={content} />
      </View>
    )
  }
}


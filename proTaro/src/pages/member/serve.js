import Taro, { Component } from '@tarojs/taro';
import { View, RichText } from '@tarojs/components';
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
    const content = `<p>
    <br />第一条：入会条件
    <br />（1）遵守国家各项法律法规，弘扬社会正能量；
    <br />（2）热爱旗袍文化和中国传统文化，具有奉献精神，乐于参与社会公益活动；
    <br />（3）若加入的主体为社会组织，必须为法人单位，具有相关政府批准文件；若加入的主体为个人的，必须年满18周岁以上；
    <br />（4）加入本协会，必须有本协会会员推荐；
    <br />（5）加入本协会是自愿的；
    <br />（6）认可本协会组织章程；
    <br />（7）履行本协会会员义务。
<br />
    <br />第二条：会员履行下列义务
    <br />（1）执行本协会的决议；
    <br />（2）维护本协会合法权益；
    <br />（3）完成本协会交办的工作；
    <br />（4）按规定交纳会费；
    <br />（5）向本协会反映情况，提供有关资料；
    <br />（6）接受本会的指导、监督、检查和培训。
    </p>`

    return (
      <View>
        <RichText nodes={content} />
      </View>
    )
  }
}


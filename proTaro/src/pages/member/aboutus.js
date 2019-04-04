import Taro, { Component } from '@tarojs/taro';
import { View, RichText } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

export default class AboutUs extends Component {
  static propTypes = {
    banner: PropTypes.array
  };

  static defaultProps = {
    banner: []
  };

  render() {
    const {  } = this.props;
    const content = `<p>
    <br />简介：
<br />广东省旗袍文化促进会是广东省民政厅唯一合法注册的旗袍文化促进会，广东省文联主管，是一家展现中华女性的典雅和高贵，引领中国传统服饰文化走向世界的高端文化交流平台。本会以“弘扬传统文化，缔造美丽人生”为办会宗旨，以“正知、正念、正行”为核心价值观，凝聚对中国传统文化具有热情的海内外同胞，携手共同践行“一带一路，互联互通”。本会将充分用“文化+、互联网+、科技+、资本+”等方式，为会员与企业提供大量的产业资源、政府资源、技术资源、打造高端民族品牌。同时，本会将以“关爱妇女儿童，发展慈善事业”为己任，举办各种弘扬社会正能量的活动。本会将致力于提高会员的个人修养和审美品位，让“美丽中国”伴随中国梦的实现而走向世界。
<br />办会理念：
<br />• “弘扬传统文化，缔造美丽人生”的办会宗旨
<br />• “正知、正念、正行”的核心价值观
<br />
<br />发展目标：
<br />• 凝聚海内外同胞，弘扬中国传统文化
<br />• 展现中华美丽女性典雅与高贵，成就自我，放亮世界
<br />• 构建“文化产业、跨界融合”的落地和实现
<br />• 关爱妇女儿童，发展慈善事业
<br />• 打造岭南非遗文化，践行一带一路、互联互通
    </p>`
    return (
      <View>
        <RichText nodes={content} />
      </View>
    )
  }
}


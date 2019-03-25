 /**
  *  @Title   微应用展示页面
  *  @Auther  Stephen WU
  *  @Des     描述
  *  @Time    2019
  */
import React, { Component } from 'react';
import { Spin } from 'antd';
import { inject, observer } from 'mobx-react';
import Msg from '../../utils/msg'


@inject(({globalStore})=>({
  account: globalStore.account,
  token: globalStore.token
}))

class Navbar extends Component {
    constructor(props) {
        super(props);
        const obj = {
          url:this.props.url,
          id:this.props.id
        }
        this.state = {
            loading:true,
            Msg:new Msg(obj)
        };
    }
    componentWillMount () {
      let a =  document.createElement('a');
          a.href = this.props.url
      this.state.Msg.listenMsg(a.host, this.serviceApi)
    }
    componentWillUnmount () {
      this.state.Msg.clearMsg()
    }
    load = (e) => {
      this.setState({loading:false})
    }
    /**
     * 发送消息给iframe  # 接口陆续完善
     */
    serviceApi = obj => {
      const { api, data } = obj
      let msgContent = ''
      switch (api) {
        case 'token':
          msgContent = this.props.token
          break;
        case 'account':
          msgContent = this.props.account
          break;
        case 'message':
          msgContent = {
            msg: '暂无消息'
          }
          break;
        default:
          break;
      }
      this.state.Msg.sendMsg(api, msgContent)
    }
    render() {
        return (
          <>
            {this.state.loading && <Spin className='loading' size='large' delay='100' />}
            <iframe
              id={this.props.id}
              ref={this.props.id}
              src={this.props.url}
              onLoad={this.load}
              name="app"
              className="minik-appframe"
            />
          </>
        );
    }
}

export default Navbar;

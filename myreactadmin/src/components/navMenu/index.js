import React, { Component } from 'react';
import { Menu, Icon, Avatar } from 'antd';
import { Link, withRouter  } from "react-router-dom";
import { inject, observer } from 'mobx-react';

@inject(({globalStore, appStore})=>({
  loginOut: globalStore.loginOut,
  hasCloseSider: globalStore.hasCloseSider,
  toggleSider: globalStore.toggleSider,
  appConfig: appStore.appConfig,
  openAPP: appStore.openAPP
}))

@withRouter
@observer
class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    changeMenu = e => {
      const key = e.key
      const { location, history } = this.props
      if(location.pathname !== '/app') history.push('/app')
      if(!key.startsWith('sys')) this.props.openAPP(key)
    }
    render() {
        let appConfig = this.props.appConfig
        return (
          <Menu theme="dark" mode="inline" onClick={this.changeMenu}>
            <Menu.SubMenu key="sub1" title={<span><Icon type="bars" /><span>系统</span></span>}>
              <Menu.Item key="sys_2"><Link to='/'>所有应用</Link></Menu.Item>
              <Menu.Item key="sys_3"><Link to='/settings'>系统设置</Link></Menu.Item>
              <Menu.Item key="sys_4" onClick={this.props.loginOut}>退出登录</Menu.Item>
            </Menu.SubMenu>
           {
              appConfig.map((app,key)=>{
                return (
                  app.collect &&
                  <Menu.Item key={app.id} title={app.title}>
                    <Icon type="appstore" /> <span className="nav-text">{app.title}</span>
                  </Menu.Item>
                )
              })
            }
          </Menu>
        );
    }
}

export default Navbar;

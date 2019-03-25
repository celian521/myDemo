 /**
  *  @Title   后台结构框架
  *  @Auther  Stephen WU
  *  @Des     描述
  *  @Time    2019
  */
import React, { Component } from 'react';
import {Redirect, Route, Link} from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';
import { inject, observer } from 'mobx-react';
import { Layout, Icon } from 'antd';

import NavMenu from '../../components/navMenu';
import Home from '../home';
import HeadBar from '../../components/common/header';
import FootBar from '../../components/common/footer';

const { Content, Sider } = Layout;

@inject(({globalStore, appStore})=>({
  loginFlag: globalStore.loginFlag,
  loginOut: globalStore.loginOut,
  hasCloseSider: globalStore.hasCloseSider,
  toggleSider: globalStore.toggleSider,
  openAPP: appStore.openAPP
}))

@observer
class LayoutPage extends Component {
    render() {
      console.log('==>', this.props.history);

      if(!this.props.loginFlag){
        return <Redirect to='/login' />;
      }
      return (
        <Layout>
            <Sider
              id='siderBar'
              style={{ overflow: 'hidden', height: '100vh', position: 'fixed', left: 0 }}
              trigger={null}
              collapsible
              collapsed={this.props.hasCloseSider}
            >
              <Link to='/'>
                <div id="logo">
                  <img src={require('../../assets/images/aimei_logo.png')} />
                  <h1>medaOS</h1>
                </div>
              </Link>
              <Scrollbars autoHide>
                <NavMenu />
              </Scrollbars>
              <div className="showHide">
                <Icon type="double-right" onClick={this.props.toggleSider} />
              </div>
            </Sider>
            <Layout style={{ marginLeft: this.props.hasCloseSider ? 80 : 200, height: '100vh',  overflow: 'auto', transition: 'margin-left .2s' }}>
              <Content>
                  {
                    this.props.routes ?
                    this.props.routes.map((route,key)=>{
                      return <Route key={key}
                                    exact={route.exact}
                                    path={route.path}
                                    render={props => (<route.component {...props} routes={route.routes} />)}
                              />
                    })
                    :
                    <Home />
                  }
              </Content>

            </Layout>
          </Layout>
      )
    }
};

export default LayoutPage;

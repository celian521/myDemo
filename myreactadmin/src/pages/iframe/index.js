 /**
  *  @Title   实现同时打开多个微应用
  *  @Auther  Stephen WU
  *  @Des     描述
  *  @Time    2019
  */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Tabs, Empty } from 'antd';
import AppPage from './appPage'
import './index.scss';

@inject(({appStore})=>({
  appConfig: appStore.appConfig,
  panes: appStore.panes,
  activeKey: appStore.activeKey,
  openAPP: appStore.openAPP,
  closeAPP: appStore.closeAPP,
  clearAPP: appStore.clearAPP
}))

@observer
class Navbar extends Component {
    // constructor(props) {
    //   super(props);
    // }
    // componentDidMount() {
    //   console.log(this.props.location);
    // }
    componentWillUnmount () {
      this.props.clearAPP()
    }
    onChange = activeKey => {
      this.props.openAPP(activeKey)
    }
    onEdit = (targetKey, action) => {
      this[action](targetKey);
    }
    add = () => {
      this.props.clearAPP()
    }
    remove = targetKey => {
      this.props.closeAPP(targetKey)
    }
    render() {
        return (
          <div id='medaos-content'>
            {
              !this.props.panes.length ?
              <Empty style={{marginTop: '300px'}} />
              :
              <Tabs
                onChange={this.onChange}
                activeKey={this.props.activeKey}
                type="editable-card"
                onEdit={this.onEdit}
              >
                {
                  this.props.panes.map(pane => {
                    return (
                      <Tabs.TabPane tab={pane.title} key={pane.id}>
                        <AppPage {...pane} />
                      </Tabs.TabPane>
                    )
                  })
                }
              </Tabs>
            }
          </div>
        );
    }
}

export default Navbar;

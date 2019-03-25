import React, { Component } from 'react';
import { Card, Menu, Button, Divider, Row, Col, Tabs } from 'antd';
import { Route, NavLink, Link } from "react-router-dom";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    componentWillMount(){
        console.log('==>',this.props);
    }
    render() {

        return (
            <div className="container">
                {/* <Card className='page-header'>
                    <NavLink activeClassName="selected" to="/home/user/list"><Button>用户列表</Button></NavLink>
                    <Divider type="vertical" />
                    <NavLink activeClassName="selected" to="/home/user/add"><Button>增加用户</Button></NavLink>
                    <Divider type="vertical" />
                    <NavLink activeClassName="selected" to="/home/user/edit"><Button>编辑用户</Button></NavLink>
                </Card> */}
                {/* <Card>
                    <Tabs tabPosition='left'>
                        <Tabs.TabPane tab="Tab 1" key="1">
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                            Content of Tab 1
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Tab 2" key="2">Content of Tab 2</Tabs.TabPane>
                        <Tabs.TabPane tab="Tab 3" key="3">Content of Tab 3</Tabs.TabPane>
                    </Tabs>
                </Card> */}
                <Card>
                    <Row gutter={20} style={{marginLeft: '-40px'}}>
                        <Col span={4} >
                            <Menu theme="link" mode="inline" style={{minHeight: '500px'}}>

                                <Menu.Item key="0">
                                    <Link to='/home/user/edit'>基本设置</Link>
                                </Menu.Item>
                                <Menu.Item key="1">
                                    <Link to='/home/user/list'>用户列表</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to='/home/user/add'>增加用户</Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to='/home/user/edit'>编辑用户</Link>
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={20}>
                            {
                                this.props.routes.map((route,key)=>{
                                    return  <Route key={key} exact path={route.path} component={route.component} />
                                })
                            }
                        </Col>
                    </Row>



                </Card>
            </div>
        );
    }
}

export default User;

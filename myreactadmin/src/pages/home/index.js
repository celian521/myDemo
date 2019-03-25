 /**
  *  @Title   初始页
  *  @Auther  Stephen WU
  *  @Des     描述
  *  @Time    2019
  */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Card, Icon, Row, Col, Avatar } from 'antd';
import { Link } from "react-router-dom";
import './index.scss'

@inject(({globalStore})=>({

}))

class welcomePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='container'>
                <Card
                    style={{margin:'-24px -24px 24px'}}
                >
                    <Row>
                        <Col span={16}>
                            <Avatar  size={64} style={{marginRight: '20px'}} className='f-fl' icon='user' />
                            <h2>早安，stephen，祝你开心每一天！</h2>
                            <p>某某某事业群－某某平台部－某某技术部－UED</p>
                        </Col>
                        <Col span={8}>
                            <div className='user-workplace'>
                                    <div>
                                        <p>项目数</p>
                                        <strong>56</strong>
                                    </div>
                                    <div>
                                        <p>排名</p>
                                        <strong>8 / 24</strong>
                                    </div>
                                    <div>
                                        <p>项目</p>
                                        <strong>223</strong>
                                    </div>
                            </div>
                        </Col>
                    </Row>
                </Card>

                <Row gutter={16}>
                    <Col span={8}>
                    <Card
                        bordered={false}
                    >
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    </Col>
                    <Col span={16}>
                    <Card
                    title='消息动态'
                    bordered={false}
                    loading
                >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                    </Col>
                </Row>
                <Card
                    title='title'
                    loading
                    bordered={false}
                >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        );
    }
}

export default welcomePage;
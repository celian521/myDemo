import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Card, Icon, Row, Col, Breadcrumb  } from 'antd';
import Draggable, {DraggableCore} from 'react-draggable';
const { Meta } = Card;

@inject(({appStore})=>({
  appConfig: appStore.appConfig,
  openAPP: appStore.openAPP
}))

@observer
class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    open = id => {
        this.props.history.push('/home/app')
        this.props.openAPP(id)
    }
    handleStart = e => {
        console.log(e);
    }
    render() {
        let product = this.props.appConfig
        return (
            <div className="container">
                <Card className='page-header'>
                    <Breadcrumb>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>列表</Breadcrumb.Item>
                    </Breadcrumb>
                </Card>

                <Row gutter={24}>




                    {
                        product.map((item, index)=>{
                            return (
                            <Draggable onStop={this.handleStart}>

                                <Col  key={index} span={8}>

                                    <Card
                                        actions={
                                            [
                                            <Icon type="star" theme={item.collect ? 'filled' : 'outlined'} onClick={()=>{ item.collect = !item.collect }} />,
                                            <Icon type="link" onClick={this.open.bind(this, item.id)}/>
                                            ]
                                        }
                                    >
                                        <Meta
                                            avatar={<Icon type={item.icon} />}
                                            title={item.title}
                                            description={item.url}
                                        />
                                    </Card>

                                </Col>
                                 </Draggable>
                            )
                        })
                    }

                </Row>

            </div>
        );
    }
}

export default Settings;

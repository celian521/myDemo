import React, { Component } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import { Avatar } from 'antd';
class UserEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:'我是一个UserEdit组件'
         };
    }
    nprogressStart = () => {
        NProgress.start();
    };
    nprogressDone = () => {
        NProgress.done();
    };
    render() {
        return (
            <div className='container'>

                <h1 onClick={this.nprogressStart}>基本设置</h1>
                <h1 onClick={this.nprogressDone}>基本设置2</h1>
                <Avatar  size={64}  icon='user' />
                <style>
                    {`
                    #nprogress .spinner{
                        left: ${this.state.collapsed ? '70px' : '206px'};
                        right: 0 !important;
                    }
                    `}
                </style>
            </div>
        );
    }
}

export default UserEdit;

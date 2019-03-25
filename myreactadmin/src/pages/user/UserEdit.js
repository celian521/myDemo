import React, { Component } from 'react';
import { Avatar } from 'antd';
class UserEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:'我是一个UserEdit组件'
         };
    }
    render() {
        return (
            <div>
                <h1>基本设置</h1>
                <Avatar  size={64}  icon='user' />
            </div>
        );
    }
}

export default UserEdit;

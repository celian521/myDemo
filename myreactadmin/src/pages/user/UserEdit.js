import React, { Component } from 'react';


import uniqueId from 'lodash/uniqueId';
// import ReactDOM from 'react-dom';
// import Sortable from 'react-sortable';

import { Avatar } from 'antd';
class UserEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: '我是一个UserEdit组件',
            items: ['Apple', 'Banana', 'Cherry', 'Guava', 'Peach', 'Strawberry']

        };
    }
    onChange(e) {
        console.log(e)
    }
    render() {
        const items = this.state.items.map(val => (<li key={ uniqueId() } data-id={ val }> {uniqueId()}{ val }</li>));

        return (
            <div>
                <h1>基本设置</h1>
                {uniqueId()}
                { items }
                {/* <Sortable
                    tag="ul"
                    onChange={ (order) =>
                        this.props.onChange(order);
                }}
                >
                    { items }
                </Sortable> */}




            </div >
        );
    }
}

export default UserEdit;

import React, { Component, Fragment } from 'react';
import Navbar from '../../components/navBar';

function Aitem (props) {
    // 对啦！这里不需要指定key:
    return <div>msg: {props.msg}</div>;
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>{props.celsius}度，水会烧开</p>;
    }
    return <p>{props.celsius}度，水不会烧开</p>;
}


class Detail extends Component {
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        this.state = {
            msg: 'Is a detail page',
            list: new Array(8).fill({id:5,p:"stephh"}),
            temperature: 10
        };
    }
    handleChange = e => {
        this.setState({temperature: e.target.value});
    }
    render() {
        const listItems = this.state.list.map((number, index) =>
            <li key={index}>
                {number.id}
            </li>
        );
        const temperature = this.state.temperature;
        // const a = {a:100}
        return (
            <Fragment>
                <Navbar></Navbar>
                {this.state.msg}
                {listItems}
                <Aitem msg={this.state.msg}/>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
                <BoilingVerdict celsius={temperature} />
            </Fragment>
        );
    }
}

export default Detail;

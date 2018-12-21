import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserName } from '../../redux/actions';

const Item = "List.Item;";

class Home extends Component {
    state = {
        inputV: '',
        name: ''
    }
    componentDidMount() {
        this.props.getUserName('stephen');
        // setTimeout(() => {
        //     this.props.getUserName('celian521');
        // }, 2000);
        // setTimeout(() => {
        //     this.props.getUserName('wushaolian');
        // }, 3000);
    }
    assed = v => {
        this.props.getUserName(v)
    }
    getValue = (e) => {
        this.setState({
            inputV:e.target.value
        })
        // console.log(e.target, e.target.value)
    }
    submitfun = () => {
        this.props.getUserName(this.state.inputV)
        console.log('aaa=>', this.state.inputV);

    }
    render() {
        return (
            <div>
                {/* onChange={val => {this.handleChange('username', val)}} */}
                <input type="text" onChange={e => { this.getValue(e)}} ></input>
                <input type='submit' onClick={this.submitfun} value='ok' />
                {this.state.inputV}
                {/* <input type="text" value={this.state.name}  onChange={this.handelName}/> <br /><br /> */}
                <br />


                <input type="submit" value="Submit" onClick={this.assed.bind(this, "teeeest")} />
                <div onClick={this.assed.bind(this, "divtessttt")}>oooooooooooooop</div>
                <div onClick={() => { this.props.getUserName("item")}}>add</div>
                <br />
                <br />
                my name is {this.props.user.name}
            </div>
        );
    }
}

export default connect(
    state => ({user: state.user}),
    {getUserName}
)(Home)

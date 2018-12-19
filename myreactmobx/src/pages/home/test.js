import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserName } from '../../redux/actions';

class Home extends Component {
    componentDidMount() {
        this.props.getUserName('stephen');
    }
    render() {
        return (
            <div>
                my name is {this.props.user.name}
            </div>
        );
    }
}

export default connect(
    state => ({user: state.user}),
    {getUserName}
)(Home)

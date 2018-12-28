import React, { Component } from 'react';
import modifyPorpsHOC from './C';

@modifyPorpsHOC
class B extends Component {
    state = {  }
    componentWillMount() {
        console.log('my is BBB')
    }
    render() {
        return (
            <div>
                BBBBB PAGE {this.props.user}
                {console.log(this.props)}
            </div>
        );
    }
}

export default B;

import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.sta = 'stemphe'
    }
    d = e => {
        return 'aaaaa' + e
    }
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div>
                home222222222
                <br />
                {this.d('ok')}
                <br />
                {this.sta}
            </div>
        );
    }
}

export default Home;

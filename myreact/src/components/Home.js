import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.sta = 'stemphe'
    }
    d = e => {
        return 'aaaaa' + e
    }
    render() {
        return (
            <div>
                home
                <br />
                {this.d('ok')}
                <br />
                {this.sta}
            </div>
        );
    }
}

export default Home;

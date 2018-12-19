import React, { Component } from 'react';
import Navbar from '../../components/navBar';

import { Icon } from 'antd';
import { inject, observer } from 'mobx-react';

// const like = require('./like.svg');
const like = () => (

    // <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    //   <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
    // </svg>

    <svg  viewBox="0 0 1024 1024" version="1.1" width="1em" height="1em">
        <path d="M797.184 518.496l-284.384 294.016-284.16-292A162.752 162.752 0 0 1 192 417.6C192 328.512 263.808 256 352 256a159.36 159.36 0 0 1 133.28 72.16L512 368.64l26.72-40.48A159.488 159.488 0 0 1 672 256c88.224 0 160 72.512 160 161.6 0 37.536-12.992 74.08-34.816 100.896M672 192a222.72 222.72 0 0 0-160 67.712A222.624 222.624 0 0 0 352 192c-123.52 0-224 101.216-224 225.6 0 52.288 18.176 103.232 52.96 145.536l285.952 293.984a62.4 62.4 0 0 0 45.088 19.168c17.12 0 33.12-6.816 45.12-19.136l287.744-296.064A226.816 226.816 0 0 0 896 417.6C896 293.216 795.52 192 672 192" p-id="2432" fill="#3a40f5"></path>
    </svg>
);

@inject(({homeStore})=>({
    num: homeStore.number,
    add: homeStore.increase,
    del: homeStore.decrease,
    kk: homeStore.kk.a,
    ackk: homeStore.ackk
}))

@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'Is a home page'
        };
    }
    ackk= (j) => {
        this.props.ackk(j, "helloooooooooooooooo")
    }
    render() {
        return (
            <div>
                = <Icon component={like} /> =
                <Icon type="setting" theme="filled" />
                <Navbar nav='form home'>nnnnnc</Navbar>
                {console.log(this.props)}
                {this.state.msg}

                <br />
                {this.props.kk}
                {this.props.num}

                <div onClick={this.props.add}>add</div>
                <br />
                <div onClick={this.props.del}>del</div>
                <div onClick={this.ackk("a")}>ackk</div>

            </div>
        );
    }
}

export default Home;

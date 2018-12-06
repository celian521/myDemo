import React, { Component } from 'react';
// import {observable, action, computed} from 'mobx';
// import {PropTypes} from "prop-types";
// import {observer, PropTypes as ObservablePropTypes } from 'mobx-react'

// const person = observable({
//     firstName: "Clive Staples",
//     lastName: "Lewis"
// });
// import {observable} from 'mobx';

// const appState = observable({
//     timer: 0
// });


// class Todo {
//     tt = appState;
//     constructor(title) {
//         console.log("aaa", title, this.tt, appSteate)
//     }
// }

class Home extends Component {
    constructor(props) {
        super(props);
       // new Todo("stephe")
    }

    render() {
        return (
            <div>
                home
            </div>
        );
    }
}

export default Home;
import React, { Component } from 'react';

class FormDemo extends Component {
    constructor(props) {
        super(props);
    }
    handleSubmit = event => {
        console.log(event, this.input.value);
        console.log(this.kk);
        event.preventDefault();
    }
    inpfun = e => {
        this.kk = e
        console.log('e', e.value)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" ref={(input) => this.input = input} />
                <input type="text" ref={this.inpfun} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FormDemo;

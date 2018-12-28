/**
 * 代理方式的高阶组件
 */
import React, { Component } from 'react';

export default (title) => WrappedComponent => class D extends Component {
    // ref={this.aaa.bind(this)}
    // aaa(inc){
    //     inc.getName();
    // }
    constructor(props){
        super(props)
        this.state={
            value: ''
        }
    }
    componentWillMount() {
        console.log('my is DDD')
    }
    onInputChange = e => {
        console.log("e", this.state.value)
        this.setState({
            value:e.target.value
        })
    }
    render() {
        const { age, ...otheprops } = this.props
        const newProps = {
            value: this.state.value,
            onInput: this.onInputChange
        }
        return (
            <div>
                {title}
                <WrappedComponent sex='男' {...otheprops} {...newProps} />
            </div>
        );
    }

}
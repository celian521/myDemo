import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import PropsTypes from 'prop-types';
import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'Is a NAVBAR COMPONNES'
        };
    }
    render() {
        return (
            <div className="home">
                <Link to="/">defaul</Link> |
                <Link to="/home">home</Link> |
                <Link to="/detail">detail</Link>|
                <Link to="/mobxDemo">mobxDemo</Link>
                {this.state.msg} == {this.props.nav} ==
                {this.props.children}
            </div>
        );
    }
}
// 为属性指定默认值:
Home.defaultProps = {
    nav: 'Stranger'
};
// 类型检查
Home.propTypes = {
    nav: PropTypes.string,
    // children: PropTypes.any.isRequired
}

// MyComponent.propTypes = {
//     children: PropTypes.element.isRequired
//   };

export default Home;

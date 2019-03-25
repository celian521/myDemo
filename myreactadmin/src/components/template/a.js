import React, { Component } from 'react';

class A extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { name='this' } = this.props
    return (
      <div>
        {name}
        aaa
        {this.props.children}
      </div>
      );
  }
}

export default A

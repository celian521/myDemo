import React, { Component } from 'react';

class A extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { name='this', text, record } = this.props
    return (
      <div>
        {text} {name}

        {this.props.children}

      </div>
      );
  }
}

export default A

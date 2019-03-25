import React, { Component } from 'react';


class B extends Component {
  render() {
    const { name="kkk" } = this.props
    return (
      <div>
        bbb {name}
        {this.props.children}
      </div>
      );
  }
}

export default B

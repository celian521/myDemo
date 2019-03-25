/**
 * 按需加载
 */
import React, { Component } from 'react';

export const asyncComponent = loadComponent => (
  class AsyncComponent extends Component {
    state = {
      Component: null,
    }
    componentWillMount() {
      if (this.hasLoadedComponent()) {
        return;
      }
      // console.log(loadComponent)
      loadComponent()
        .then(module => module.default)
        .then((Component) => {
          this.setState({
            Component
          });
        })
        .catch((err) => {
          console.error(`Cannot load component in <AsyncComponent />`);
          throw err;
        });
    }

    hasLoadedComponent() {
      return this.state.Component !== null;
    }

    render() {
      const { Component } = this.state;
      return (Component) ? <Component { ...this.props } /> : null;
    }
  }
);

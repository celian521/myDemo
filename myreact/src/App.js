import React, { Component } from 'react';
import './assets/style/App.css';
import './assets/style/a.scss';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home.js';
import Home2 from './components/Home2.js';
import mobx from './components/mobx.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/h/555?k=2000">link</Link>
          <Route exact path="/" component={Home} />
          <Route path="/h/:aid" component={Home2} />
          <Route path="/mobx/" component={mobx} />
        </div>
      </Router>
    );
  }
}

export default App;

 /**
  *  @Title   路由模块化 + 嵌套路由
  *  @Auther  Stephen WU
  *  @Des     描述
  *  @Time    2019
  */
import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import routesConfig from './config';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
           {
              routesConfig.map((route,key)=>{
                return <Route key={key}
                              exact={route.exact}
                              path={route.path}
                              render={props => (<route.component {...props} routes={route.routes} />)}
                        />
              })
            }
        </Fragment>
    </Router>
    );
  }
}
export default App;
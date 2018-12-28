import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from './config';
class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
           {
            routes.map((route,key)=>{
                if(route.exact){
                  return <Route key={key} exact path={route.path}
                  render={props => (
                    <route.component {...props} routes={route.routes} />
                  )}
                  />
                }else{
                  return <Route  key={key}  path={route.path}
                  render={props => (
                    <route.component {...props} routes={route.routes} />
                  )}
                  />
                }
            })
          }
        </Fragment>
    </Router>
    );
  }
}
export default App;
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Router from './routes'
import * as serviceWorker from './serviceWorker';
import './assets/style/index.scss';
import { Provider } from 'mobx-react';
import store from './stores';

ReactDOM.render(
    <Provider {...store}>
      <Router />
    </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();

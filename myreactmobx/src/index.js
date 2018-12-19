import React from 'react';
import ReactDOM from 'react-dom';
import Router from './App';
// import Router from './routes'
import * as serviceWorker from './serviceWorker';

// import { Provider } from 'mobx-react';
// import store from './stores';

import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();

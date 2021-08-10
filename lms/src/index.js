import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/css/bootstrap.min.css';
import './assets/css/main.css';
import WhiteBoard from './container/WhiteBoard';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import * as serviceWorker from './serviceWorker';

const App = (
  <Provider store={store}>
    <BrowserRouter>
      <WhiteBoard />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
serviceWorker.unregister();

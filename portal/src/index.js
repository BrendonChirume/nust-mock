import React from 'react';
import ReactDOM from 'react-dom';
import './asserts/css/main.css';
import reportWebVitals from './reportWebVitals';
import NustStudentPortal from './containers/NustStudentPortal';
import { Provider } from 'react-redux';
import configureStore from './store/store';

const store = configureStore();

const App = (
  <React.StrictMode>
    <Provider store={store}>
      <NustStudentPortal />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(App, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

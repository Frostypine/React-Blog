import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App/App';
import './index.css';
import 'bootstrap//dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {store} from './state/store/store.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
    <BrowserRouter>
     <App />
    </BrowserRouter>
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


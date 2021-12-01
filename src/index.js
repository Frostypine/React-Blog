//index.js
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 

import './index.css';
import 'bootstrap//dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App/App';
import {Provider} from 'react-redux';
import {store} from './state/store/store.js';

ReactDOM.render(
 // <React.StrictMode>
    <Provider store ={store}>
    <BrowserRouter>
     <App />
    </BrowserRouter>
   </Provider>,
  //</React.StrictMode>,
  document.getElementById('root')
);


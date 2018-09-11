import React from 'react';
import ReactDOM from 'react-dom';
import Mainroute from './routes/Mainroute';
import store from "./store";
import { Provider } from "react-redux"
import './styles/styles.scss';

//window.store = store;
//window.login = login;

ReactDOM.render(
  <Provider store={store}>
  <Mainroute />
  </Provider>
  , document.getElementById('root')
);

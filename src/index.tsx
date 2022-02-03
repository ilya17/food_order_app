import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { compose, createStore } from '@reduxjs/toolkit';
import { allReducer } from './core/store';
import { Provider } from 'react-redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducer, composeEnhancers())

store.subscribe(() => {
  if (localStorage.getItem('totalPrice') !== store.getState().totalPrice) {
    localStorage.setItem('totalPrice', store.getState().totalPrice.toFixed(2));
  }

  if (Number(localStorage.getItem('counter')) !== store.getState().counter) {
    localStorage.setItem('counter', store.getState().counter + '');
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
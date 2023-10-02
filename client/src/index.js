import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; // Import from 'redux' library
import { Provider } from 'react-redux'; // Import 'Provider' from 'react-redux'
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

const el = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  el
);

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './store/reducers/root-reducer';
import App from './components/app/app';
// import {createAPI} from './services/api';
import {getOffers} from './store/api-actions';

// const api = createAPI();
// const store = createStore(rootReducer);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument()
    )
  )
);

store.dispatch(getOffers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(`root`)
);

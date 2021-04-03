import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createAPI} from './services/api.js';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import rootReducer from './store/reducers/root-reducer.js';
import App from './components/app/app.jsx';
import {getHotels} from './store/api-actions.js';

const api = createAPI();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument(api)
    )
  )
);

store.dispatch(getHotels());

ReactDOM.render(
  <AlertProvider template={AlertTemplate}>
    <Provider store={store}>
      <App />
    </Provider>
  </AlertProvider>,
  document.getElementById(`root`)
);

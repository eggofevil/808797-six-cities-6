import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as ReactReduxProvider} from 'react-redux';
import {createAPI} from './services/api.js';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';

import {PersistGate} from 'redux-persist/integration/react';

import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter} from 'react-router-dom';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import persistedReducer from './store/persist-config.js';
import App from './components/app/app.jsx';
import {getHotels} from './store/api-actions.js';

const api = createAPI();

const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument(api)
    )
  )
);

const persistor = persistStore(store);

store.dispatch(getHotels());

ReactDOM.render(
  <ReactReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <AlertProvider template={AlertTemplate}>
          <App />
        </AlertProvider>
      </BrowserRouter>
    </PersistGate>
  </ReactReduxProvider>,
  document.getElementById(`root`)
);

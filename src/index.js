import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as ReactReduxProvider} from 'react-redux';
import {createAPI} from './services/api.js';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter} from 'react-router-dom';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import rootReducer from './store/reducers/root-reducer';
import {getAuthState} from './store/api-actions.js';
import App from './components/app/app.jsx';

const api = createAPI();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument(api)
    )
  )
);

store.dispatch(getAuthState());

ReactDOM.render(
  <ReactReduxProvider store={store}>
    <BrowserRouter>
      <AlertProvider template={AlertTemplate}>
        <App />
      </AlertProvider>
    </BrowserRouter>
  </ReactReduxProvider>,
  document.getElementById(`root`)
);

import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './main/main.jsx';
import Room from './room/room.jsx';
import SignIn from './sign-in/sign-in.jsx';
import Favorites from './favorites/favorites.jsx';

import TestComponent from './test-component/test-component-5.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/offer:id" render={(serviceProps) => (<Room state={serviceProps.location.state} />)} />
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/test">
          <TestComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

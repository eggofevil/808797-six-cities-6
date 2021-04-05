import React from 'react';
import {Redirect} from 'react-router';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Main from './main/main.jsx';
import Room from './room/room.jsx';
import SignIn from './sign-in/sign-in.jsx';
import Favorites from './favorites/favorites.jsx';
import NoSuchPage from './no-such-page/no-such-page.jsx';

import TestComponent from './test-component/test-component-5.jsx';

import authStatePropTypes from '../prop-types/authstate.proptypes.js';

const App = ({authState}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          {authState ?
            <Redirect to="/" />
            :
            <SignIn />
          }
        </Route>
        <Route exact path="/offer:id" render={(serviceProps) => (<Room offerId={serviceProps.match.params.id} />)} />
        <Route exact path="/favorites">
          {authState ?
            <Favorites />
            :
            <Redirect to="/login" />
          }
        </Route>
        <Route exact path="/test">
          <TestComponent />
        </Route>
        <Route path="*">
            <NoSuchPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = ({LOGIC}) => ({authState: LOGIC.authState});

App.propTypes = {
  authState: authStatePropTypes
};

export {App};
export default connect(mapStateToProps)(App);

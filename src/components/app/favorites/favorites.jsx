import React from 'react';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {propTypes} from 'prop-types';

import UserPane from '../shared/user-pane/user-pane.jsx';
import MainPageLink from '../shared/main-page-link/main-page-link.jsx';
import FavoritesLocationsList from './favorites-location-list/favorites-location-list.jsx';

import authStatePropTypes from '../../prop-types/authstate.proptypes.js';

const Favorites = ({authState}) => {
  return (
    <>{authState ?
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <MainPageLink />
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <UserPane />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesLocationsList />
            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
          </a>
        </footer>
      </div>
      :
      <Redirect to="/login" />
    }</>
  );
};

const mapStateToProps = ({LOGIC}) => ({authState: LOGIC.authState});

Favorites.propTypes = {
  authState: authStatePropTypes
};

export {Favorites};
export default connect(mapStateToProps)(Favorites);

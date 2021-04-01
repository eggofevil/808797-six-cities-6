import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';

import MainPageLink from '../shared/main-page-link/main-page-link.jsx';
import UserPane from '../shared/user-pane/user-pane.jsx';
import SignInForm from './sign-in-form/sign-in-form.jsx';

import authorisationStatePropTypes from '../../prop-types/authorisation-state.proptypes.js';

const SignIn = ({authorisationState}) => {
  return (
    <>
      {authorisationState ?
        <Redirect to="/" />
        :
        <div className="page page--gray page--login">
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
          <main className="page__main page__main--login">
            <div className="page__login-container container">
              <section className="login">
                <h1 className="login__title">Sign in</h1>
                <SignInForm />
              </section>
              <section className="locations locations--login locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to="/">
                    <span>Amsterdam</span>
                  </Link>
                </div>
              </section>
            </div>
          </main>
        </div>
      }
    </>
  );
};

const mapStateToProps = ({LOGIC}) => ({authorisationState: LOGIC.authorisationState});

SignIn.propTypes = {
  authorisationState: authorisationStatePropTypes
};

export {SignIn};
export default connect(mapStateToProps)(SignIn);

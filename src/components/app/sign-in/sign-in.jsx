import React from 'react';

import Header from '../shared/header/header.jsx';
import SignInForm from './sign-in-form/sign-in-form.jsx';
import CityTabLink from '../shared/city-tab-link/city-tab-link.jsx';

const SignIn = () => {
  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <SignInForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <CityTabLink cityName="Amsterdam" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SignIn;

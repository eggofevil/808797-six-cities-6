import React from 'react';
import PropTypes from 'prop-types';

const SignInForm = ({handleSubmit, handleChange}) => {
  return (
    <form onSubmit={handleSubmit} className="login__form form">
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input onChange={handleChange} className="login__input form__input" type="email" name="email" placeholder="Email" required />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input onChange={handleChange} className="login__input form__input" type="password" name="password" placeholder="Password" required />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
};

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SignInForm;

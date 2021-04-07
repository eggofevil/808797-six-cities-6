import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {authUser} from '../../store/api-actions.js';

const SignInForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: ``,
    password: ``
  });

  const handleChange = (evt) => {
    evt.persist();
    setState((previousState) => {
      return {...previousState, [evt.target.name]: evt.target.value};
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(authUser(state));
  };

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

export default SignInForm;

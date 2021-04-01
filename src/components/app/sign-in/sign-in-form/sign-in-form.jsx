import React, {useState} from 'react';

const SignInForm = () => {
  const [state, setState] = useState({
    email: ``,
    password: ``
  });

  function handleChange(evt) {
    evt.persist();
    setState((previousState) => {
      return {...previousState, [evt.target.name]: evt.target.value};
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(state);
  }

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

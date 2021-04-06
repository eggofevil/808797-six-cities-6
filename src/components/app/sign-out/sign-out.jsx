import React from 'react';
import {useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {setAuthState} from '../../../store/reducers/logic/action-creator.js';

const SignOut = () => {
  const dispatch = useDispatch();
  dispatch(setAuthState(null));

  return <Redirect to="/" />;
};

export default SignOut;

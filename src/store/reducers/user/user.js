import {extend} from '../../../utils';

const initialState = {
  authorized: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case `AUTHORIZE_USER`:
    return extend(state, {
      authorized: action.autorisationStatus,
      user: action.getUserData
    });
  default:
    return state;
  }
};

export default user;

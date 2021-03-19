import {extend} from '../../../utils';

const initialState = {
  offers: [],
};

const appData = (state = initialState, action) => {
  switch (action.type) {
  case `SET_OFFERS`:
    return extend(state, {
      offers: action.offers
    });
  default:
    return state;
  }
};

export default appData;

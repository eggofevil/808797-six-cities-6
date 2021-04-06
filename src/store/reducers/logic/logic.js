import {extend} from '../../../utils';
import {SET_SORTING_TYPE, SET_ACTIVE_CARD, SET_AUTH_STATE} from './actions.js';
import {SortingType} from '../../../const';

const initialState = {
  sortingType: SortingType.POPULARITY,
  activeCard: null,
  authState: null
};

const logic = (state = initialState, action) => {
  switch (action.type) {
  case SET_SORTING_TYPE:
    return extend(state, {
      sortingType: action.payload
    });
  case SET_ACTIVE_CARD:
    return extend(state, {
      activeCard: action.payload
    });
  case SET_AUTH_STATE:
    return extend(state, {
      authState: action.payload
    });
  default:
    return state;
  }
};

export default logic;

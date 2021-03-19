import {extend} from '../../../utils';
import {SortingTypes} from '../../../const';

const sortingType = SortingTypes.POPULARITY;

const initialState = {
  cityName: `Amsterdam`,
  sortingType,
  activeCard: null
};

const appLogic = (state = initialState, action) => {
  switch (action.type) {
  case `SET_CITY`:
    return extend(state, {
      cityName: action.cityName
    });
  case `SET_SORTING_TYPE`:
    return extend(state, {
      sortingType: action.sortingType,
    });
  case `SET_ACTIVE_CARD`:
    return extend(state, {
      activeCard: action.activeCard
    });
  default:
    return state;
  }
};

export default appLogic;

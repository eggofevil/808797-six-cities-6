import {extend} from '../../../utils';
import {SET_OFFERS, SET_CURRENT_CITY, SET_NEARBY_OFFERS, SET_OFFER_REVIEWS, SET_FAVORITES, CHANGE_OFFER} from './actions.js';

const initialState = {
  offers: [],
  currentCityName: `Amsterdam`,
  nearbyOffers: [],
  offerReviews: [],
  favorites: []
};

const data = (state = initialState, action) => {
  switch (action.type) {
  case SET_OFFERS:
    return extend(state, {
      offers: action.payload
    });
  case SET_CURRENT_CITY:
    return extend(state, {
      currentCityName: action.payload,
    });
  case SET_NEARBY_OFFERS:
    return extend(state, {
      nearbyOffers: action.payload
    });
  case SET_OFFER_REVIEWS:
    return extend(state, {
      offerReviews: action.payload
    });
  case SET_FAVORITES:
    return extend(state, {
      favorites: action.payload
    });
  case CHANGE_OFFER:
    return extend(state, {
      offers: (() => {
        const newOffers = state.offers.slice();
        const index = newOffers.indexOf(action.oldOffer);
        newOffers[index] = action.newOffer;
        return newOffers;
      })()
    });
  default:
    return state;
  }
};

export default data;

import {extend} from '../../../utils';
import {SET_OFFERS, SET_CURRENT_CITY_AND_CITY_OFFERS, SET_NEARBY_OFFERS, SET_OFFER_REVIEWS} from './actions.js';

const initialState = {
  offers: [],
  currentCityName: `Amsterdam`,
  currentCityOffers: [],
  nearbyOffers: [],
  offerReviews: []
};

const data = (state = initialState, action) => {
  switch (action.type) {
  case SET_OFFERS:
    return extend(state, {
      offers: action.payload
    });
  case SET_CURRENT_CITY_AND_CITY_OFFERS:
    return extend(state, {
      currentCityName: action.payload,
      currentCityOffers: state.offers.filter((offer) => offer.city.name === action.payload)
    });
  case SET_NEARBY_OFFERS:
    return extend(state, {
      nearbyOffers: action.payload
    });
  case SET_OFFER_REVIEWS:
    return extend(state, {
      offerReviews: action.payload
    });
  default:
    return state;
  }
};

export default data;

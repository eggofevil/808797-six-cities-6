import {extend} from '../../../utils';
import {
  SET_OFFERS,
  SET_CURRENT_CITY,
  SET_CURRENT_OFFER,
  SET_NEARBY_OFFERS,
  SET_OFFER_REVIEWS,
  SET_FAVORITES,
  CHANGE_OFFER
} from './actions.js';

const initialState = {
  offers: [],
  currentCityName: `Paris`,
  currentOffer: null,
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
  case SET_CURRENT_OFFER:
    return extend(state, {
      currentOffer: action.payload,
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
        const offers = state.offers.slice();
        offers[offers.findIndex((offer) => offer.id === action.offerId)] = action.offer;
        return offers;
      })()
    });
  default:
    return state;
  }
};

export default data;

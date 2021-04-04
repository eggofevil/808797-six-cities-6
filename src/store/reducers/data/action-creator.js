import {SET_OFFERS, SET_CURRENT_CITY, SET_NEARBY_OFFERS, SET_OFFER_REVIEWS, SET_FAVORITES} from './actions.js';

export const setOffers = (offers) => ({
  type: SET_OFFERS,
  payload: offers
});

export const setCurrentCity = (cityName) => ({
  type: SET_CURRENT_CITY,
  payload: cityName
});

export const setNearbyOffers = (nearbyOffers) => ({
  type: SET_NEARBY_OFFERS,
  payload: nearbyOffers
});

export const setOfferReviews = (offerReviews) => ({
  type: SET_OFFER_REVIEWS,
  payload: offerReviews
});

export const setFavorites = (favorites) => ({
  type: SET_FAVORITES,
  payload: favorites
});

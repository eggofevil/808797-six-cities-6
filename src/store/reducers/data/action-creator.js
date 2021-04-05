import {
  SET_OFFERS,
  SET_CURRENT_CITY,
  SET_CURRENT_OFFER,
  SET_NEARBY_OFFERS,
  SET_OFFER_REVIEWS,
  SET_FAVORITES,
  CHANGE_OFFER
} from './actions.js';

export const setOffers = (offers) => ({
  type: SET_OFFERS,
  payload: offers
});

export const setCurrentCity = (cityName) => ({
  type: SET_CURRENT_CITY,
  payload: cityName
});

export const setCurrentOffer = (offer) => ({
  type: SET_CURRENT_OFFER,
  payload: offer
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

export const changeOffer = (offerId, offer) => ({
  type: CHANGE_OFFER,
  offerId,
  offer
});

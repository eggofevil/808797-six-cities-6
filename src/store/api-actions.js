import {
  setOffers,
  setCurrentCity,
  setCurrentOffer,
  setNearbyOffers,
  setOfferReviews,
  setFavorites,
  changeOffer
} from './reducers/data/action-creator.js';
import {setAuthState} from './reducers/logic/action-creator.js';

const FIRST_OFFER_INDEX = 0;

export const getHotels = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      dispatch(setOffers(data));
      dispatch(setCurrentCity(data[FIRST_OFFER_INDEX].city.name));
    })
);

export const getOffer = (offerId) => (dispatch, _getState, api) => (
  api.get(`/hotels/${offerId}`)
    .then(({data}) => {
      dispatch(setCurrentOffer(data));
    })
);

export const getNearbyOffers = (offerId) => (dispatch, _getState, api) => (
  api.get(`/hotels/${offerId}/nearby`)
    .then(({data}) => {
      dispatch(setNearbyOffers(data));
    })
);

export const getOfferReviews = (offerId) => (dispatch, _getState, api) => (
  api.get(`/comments/${offerId}`)
    .then(({data}) => {
      dispatch(setOfferReviews(data));
    })
);

export const getFavorites = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => {
      dispatch(setFavorites(data));
    }, (error) => {
      console.log(error);
    })
);

export const authUser = (credentials) => (dispatch, _getState, api) => (
  api.post(`/login`, credentials)
    .then((data) => {
      dispatch(setAuthState(data.data));
      return false;
    })
);

export const postReview = (offerId, requestBody, onResponse) => (dispatch, _getState, api) => (
  api.post(`/comments/${offerId}`, requestBody)
    .then(() => {
      const message = `Yor review is posted! Thank you for your review!`;
      dispatch(getOfferReviews(offerId));
      onResponse(message);
    }, (error) => {
      const message = `Something went wrong, please try again later... ${error}`;
      onResponse(message);
    })
);

export const postBookmarked = (offerId, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${offerId}/${status}`)
    .then(({data}) => {
      dispatch(changeOffer(offerId, data));
      dispatch(getOffer(offerId));
      dispatch(getFavorites());
    }, (error) => {
      console.log(error);
    })
);

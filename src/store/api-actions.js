import {
  setOffers,
  setCurrentOffer,
  setNearbyOffers,
  setOfferReviews,
  setFavorites,
  changeOffer
} from './reducers/data/action-creator.js';
import {APIRoute} from '../const.js';
import {setAuthState} from './reducers/logic/action-creator.js';

export const authUser = (credentials) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, credentials)
    .then((data) => {
      dispatch(setAuthState(data.data));
    })
    .catch(() => {
    })
);

export const getAuthState = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((data) => {
      dispatch(setAuthState(data.data));
    })
    .catch(() => {
    })
);

export const getHotels = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      dispatch(setOffers(data));
    })
);

export const getOffer = (offerId) => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS + `/${offerId}`)
    .then(({data}) => {
      dispatch(setCurrentOffer(data));
    })
);

export const getOfferReviews = (offerId) => (dispatch, _getState, api) => (
  api.get(APIRoute.REVIEWS + `/${offerId}`)
    .then(({data}) => {
      dispatch(setOfferReviews(data));
    })
);

export const postReview = (offerId, requestBody, onResponse) => (dispatch, _getState, api) => (
  api.post(APIRoute.REVIEWS + `/${offerId}`, requestBody)
    .then(() => {
      const message = `Yor review is posted! Thank you for your review!`;
      dispatch(getOfferReviews(offerId));
      onResponse(message);
    }, (error) => {
      const message = `Something went wrong, please try again later... ${error}`;
      onResponse(message);
    })
);

export const getNearbyOffers = (offerId) => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS + `/${offerId}/nearby`)
    .then(({data}) => {
      dispatch(setNearbyOffers(data));
    })
);

export const getFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then(({data}) => {
      dispatch(setFavorites(data));
    }, () => {
    })
);

export const postBookmarked = (offerId, status) => (dispatch, _getState, api) => (
  api.post(APIRoute.FAVORITES + `/${offerId}/${status}`)
    .then(({data}) => {
      dispatch(changeOffer(offerId, data));
      dispatch(getOffer(offerId));
      dispatch(getFavorites());
    }, () => {
    })
);

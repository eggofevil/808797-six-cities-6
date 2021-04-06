import {
  setOffers,
  setCurrentCity,
  setCurrentOffer,
  setNearbyOffers,
  setOfferReviews,
  setFavorites,
  changeOffer
} from './reducers/data/action-creator.js';
import {APIRoutes} from '../const.js';
import {setAuthState} from './reducers/logic/action-creator.js';

const FIRST_OFFER_INDEX = 0;

export const authUser = (credentials) => (dispatch, _getState, api) => (
  api.post(APIRoutes.LOGIN, credentials)
    .then((data) => {
      dispatch(setAuthState(data.data));
      return false;
    })
);

export const getHotels = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.OFFERS)
    .then(({data}) => {
      dispatch(setOffers(data));
      dispatch(setCurrentCity(data[FIRST_OFFER_INDEX].city.name));
    })
);

export const getOffer = (offerId) => (dispatch, _getState, api) => (
  api.get(APIRoutes.OFFERS + `/${offerId}`)
    .then(({data}) => {
      dispatch(setCurrentOffer(data));
    })
);

export const getOfferReviews = (offerId) => (dispatch, _getState, api) => (
  api.get(APIRoutes.REVIEWS + `/${offerId}`)
    .then(({data}) => {
      dispatch(setOfferReviews(data));
    })
);

export const postReview = (offerId, requestBody, onResponse) => (dispatch, _getState, api) => (
  api.post(APIRoutes.REVIEWS + `/${offerId}`, requestBody)
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
  api.get(APIRoutes.OFFERS + `/${offerId}/nearby`)
    .then(({data}) => {
      dispatch(setNearbyOffers(data));
    })
);

export const getFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.FAVORITES)
    .then(({data}) => {
      dispatch(setFavorites(data));
    }, () => {
    })
);

export const postBookmarked = (offerId, status) => (dispatch, _getState, api) => (
  api.post(APIRoutes.FAVORITES + `/${offerId}/${status}`)
    .then(({data}) => {
      dispatch(changeOffer(offerId, data));
      dispatch(getOffer(offerId));
      dispatch(getFavorites());
    }, () => {
    })
);

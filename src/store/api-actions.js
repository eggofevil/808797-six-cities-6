import {setOffers, setCurrentCity, setNearbyOffers, setOfferReviews} from './reducers/data/action-creator.js';
import {setAuthState} from './reducers/logic/action-creator.js';

const FIRST_OFFER_INDEX = 0;

export const getHotels = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      dispatch(setOffers(data));
      dispatch(setCurrentCity(data[FIRST_OFFER_INDEX].city.name));
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

export const postUserData = (credentials) => (dispatch, _getState, api) => (
  api.post(`/login`, credentials)
    .then((data) => {
      dispatch(setAuthState(data.data));
    }, (error) => {
      console.log(error);
    })
);

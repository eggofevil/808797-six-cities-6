import {setOffers, setCurrentCityAndCityOffers, setNearbyOffers, setOfferReviews} from './reducers/data/action-creator.js';
import {setAuthState} from './reducers/logic/action-creator.js';

export const getHotels = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      dispatch(setOffers(data));
      dispatch(setCurrentCityAndCityOffers(data[0].city.name));
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

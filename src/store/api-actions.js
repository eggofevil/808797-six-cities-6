import {setOffers, setCity} from './reducers/actions';
import {createAPI} from '../services/api';

const api = createAPI();

export const getOffers = () => (dispatch, _getState) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const cityName = data[0].city.name;
      dispatch(setCity(cityName));
      dispatch(setOffers(data));
    })
);

export const getReviews = (offerId, setReviews) => {
  return api.get(`/comments/${offerId}`)
    .then(({data}) => {
      setReviews(data);
    });
};

/*
export const getReviews = (offerId) => (
  api.get(`/comments/${offerId}`)
    .then(({data}) => {
      console.log(data);
      return (data);
    })
);
*/

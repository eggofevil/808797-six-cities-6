import {createSelector} from 'reselect';

import {sortArrayByKeyValue} from '../../../utils.js';

export const selectCurrentCityName = (state) => {
  return (state.currentCityName);
};

export const selectOffers = (state) => {
  return (state.offers);
};

export const selectCityOffers = createSelector(
  [selectOffers, selectCurrentCityName],
  (offers, currentCityName) => offers.filter((offer) => offer.city.name === currentCityName)
);

export const selectNearbyOffers = (state) => (state.nearbyOffers);

export const selectOfferReviews = (state) => {
  return sortArrayByKeyValue(state.offerReviews, `date`, `descending`);
};

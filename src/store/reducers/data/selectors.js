import {createSelector} from 'reselect';

import {sortArrayByKeyValue} from '../../../utils.js';
import {SortingTypes} from '../../../const.js';

export const selectCurrentCityName = (state) => {
  return state.DATA.currentCityName;
};

export const selectOffers = (state) => {
  return state.DATA.offers;
};

export const selectSortingType = (state) => {
  return state.LOGIC.sortingType;
};

export const selectOfferReviews = (state) => {
  return state.DATA.offerReviews;
};

export const selectCityOffers = createSelector(
  [selectOffers, selectCurrentCityName],
  (offers, currentCityName) => offers.filter((offer) => offer.city.name === currentCityName)
);

export const selectSortedCityOffers = createSelector(
  [selectCityOffers, selectSortingType],
  (cityOffers, sortingType) => {
    switch (sortingType) {
    case SortingTypes.PRICE_HIGH_TO_LOW:
      return sortArrayByKeyValue(cityOffers, `price`, `descending`);
    case SortingTypes.PRICE_LOW_TO_HIGH:
      return sortArrayByKeyValue(cityOffers, `price`, `ascending`);
    case SortingTypes.RATING:
      return sortArrayByKeyValue(cityOffers, `rating`, `descending`);
    default:
      return cityOffers;
    }
  }
);

export const selectSortedOfferReviews = createSelector(
  [selectOfferReviews],
  (offerReviews) => sortArrayByKeyValue(offerReviews, `date`, `descending`)
);

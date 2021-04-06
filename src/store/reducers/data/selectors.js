import {createSelector} from 'reselect';

import {sortArrayByKeyValue} from '../../../utils.js';
import {SortingType} from '../../../const.js';

export const selectCurrentCityName = ({DATA}) => {
  return DATA.currentCityName;
};

export const selectOffers = ({DATA}) => {
  return DATA.offers;
};

export const selectSortingType = ({LOGIC}) => {
  return LOGIC.sortingType;
};

export const selectOfferReviews = ({DATA}) => {
  return DATA.offerReviews;
};

export const selectCityOffers = createSelector(
  [selectOffers, selectCurrentCityName],
  (offers, currentCityName) => offers.filter((offer) => offer.city.name === currentCityName)
);

export const selectSortedCityOffers = createSelector(
  [selectCityOffers, selectSortingType],
  (cityOffers, sortingType) => {
    switch (sortingType) {
    case SortingType.PRICE_HIGH_TO_LOW:
      return sortArrayByKeyValue(cityOffers, `price`, `descending`);
    case SortingType.PRICE_LOW_TO_HIGH:
      return sortArrayByKeyValue(cityOffers, `price`, `ascending`);
    case SortingType.RATING:
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

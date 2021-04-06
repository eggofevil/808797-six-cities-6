import {createSelector} from 'reselect';
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

const sortArrayOfObjectsByKey = (offers, key) => {
  offers = offers.slice();
  return offers.sort((offer1, offer2) => offer1[key] - offer2[key]);
};

export const selectSortedCityOffers = createSelector(
  [selectCityOffers, selectSortingType],
  (cityOffers, sortingType) => {
    switch (sortingType) {
    case SortingType.PRICE_HIGH_TO_LOW:
      return sortArrayOfObjectsByKey(cityOffers, `price`).reverse();
    case SortingType.PRICE_LOW_TO_HIGH:
      return sortArrayOfObjectsByKey(cityOffers, `price`);
    case SortingType.RATING:
      return sortArrayOfObjectsByKey(cityOffers, `price`).reverse();
    default:
      return cityOffers;
    }
  }
);

export const selectSortedOfferReviews = createSelector(
  [selectOfferReviews],
  (offerReviews) => sortArrayOfObjectsByKey(offerReviews, `date`).reverse()
);

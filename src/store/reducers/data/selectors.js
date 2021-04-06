import {createSelector} from 'reselect';
import {SortingType} from '../../../const.js';
import {CompareFunction} from './compare-functions.js';

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
    const offers = cityOffers.slice();
    switch (sortingType) {
    case SortingType.PRICE_HIGH_TO_LOW:
      return offers.sort(CompareFunction[SortingType.PRICE_HIGH_TO_LOW]);
    case SortingType.PRICE_LOW_TO_HIGH:
      return offers.sort(CompareFunction[SortingType.PRICE_LOW_TO_HIGH]);
    case SortingType.RATING:
      return offers.sort(CompareFunction[SortingType.RATING]);
    default:
      return cityOffers;
    }
  }
);

export const selectSortedOfferReviews = createSelector(
  [selectOfferReviews],
  (offerReviews) => {
    const reviews = offerReviews.slice();
    return reviews.sort(CompareFunction.DATE_NEWEST_TO_OLDEST);
  }
);

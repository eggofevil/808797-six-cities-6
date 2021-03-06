import {SortingType} from '../../../const.js';

export const CompareFunction = {
  [SortingType.RATING]: (a, b) => {
    return b.rating - a.rating;
  },
  [SortingType.PRICE_HIGH_TO_LOW]: (a, b) => {
    return b.price - a.price;
  },
  [SortingType.PRICE_LOW_TO_HIGH]: (a, b) => {
    return a.price - b.price;
  },
  DATE_NEWEST_TO_OLDEST: (a, b) => {
    return Date.parse(b.date) - Date.parse(a.date);
  }
};

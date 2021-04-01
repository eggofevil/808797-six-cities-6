import {sortArrayByKeyValue} from '../../../utils.js';

export const selectNearbyOffers = (state) => (state.nearbyOffers);
// export const selectOfferReviews = (state) => (state.offerReviews);
export const selectOfferReviews = (state) => {
  return sortArrayByKeyValue(state.offerReviews, `date`, `descending`);
};
// sortArrayByKeyValue(currentCityOffers.slice(), `price`, `descending`);

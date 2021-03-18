export const setOffers = (offers) => ({
  type: `SET_OFFERS`,
  offers
});

export const setCity = (cityName) => ({
  type: `SET_CITY`,
  cityName
});

export const setSortingType = (sortingType) => ({
  type: `SET_SORTING_TYPE`,
  sortingType
});

export const setActiveCard = (offerId = null) => ({
  type: `SET_ACTIVE_CARD`,
  activeCard: offerId
});

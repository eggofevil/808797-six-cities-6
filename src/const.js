const CityName = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

const SortingType = {
  POPULARITY: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  RATING: `Top rated first`,
};

const APIRoute = {
  LOGIN: `/login`,
  OFFERS: `/hotels`,
  REVIEWS: `/comments`,
  FAVORITES: `/favorite`
};

const RATING_BAR_DIVISION = 20;

export {CityName, SortingType, RATING_BAR_DIVISION, APIRoute};

const CityNames = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

const SortingTypes = {
  POPULARITY: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  RATING: `Top rated first`
};

const APIRoutes = {
  LOGIN: `/login`,
  OFFERS: `/hotels`,
  REVIEWS: `/comments`,
  FAVORITES: `/favorite`
};

const RATING_BAR_DIVISION = 20;

export {CityNames, SortingTypes, RATING_BAR_DIVISION, APIRoutes};

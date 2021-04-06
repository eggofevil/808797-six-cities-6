export const extend = (a, b) => Object.assign({}, a, b);

export const sortArrayOfObjectsByKey = (offers, key) => {
  offers = offers.slice();
  return offers.sort((offer1, offer2) => offer1[key] - offer2[key]);
};

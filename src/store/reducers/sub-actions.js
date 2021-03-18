export const filterCityOffers = (cityName, offers) => offers.filter((offer) => offer.city.name === cityName);


/*
export const getCityData = (city) => {
  if (city) {
    const offerByCity = offers.find((offer) => offer.city.name === city);
    return offerByCity ? offerByCity.city : {name: city};
  }
  return offers[0] ? offers[0].city : {name: `Amsterdam`};
};
*/

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OffersList from '../offers-list/offers-list';
import {SortingTypes} from '../../const';
import offerPropTypes from '../prop-types/offer-prop-types';

import {sortArrayByKeyValue} from '../../utils';

const sortCityOffers = (sortingType, cityOffers) => {
  switch (sortingType) {
  case SortingTypes.PRICE_HIGH_TO_LOW:
    return sortArrayByKeyValue(cityOffers.slice(), `price`, `descending`);
  case SortingTypes.PRICE_LOW_TO_HIGH:
    return sortArrayByKeyValue(cityOffers.slice(), `price`, `ascending`);
  case SortingTypes.RATING:
    return sortArrayByKeyValue(cityOffers.slice(), `rating`, `descending`);
  default:
    return cityOffers;
  }
};

const SortedOffersList = ({cityOffers, sortingType}) => {
  return (
    <OffersList
      offersListClassName="cities__places-list tabs__content"
      offerCardArticleClassName="cities__place-card"
      offerCardDivClassName="cities__image-wrapper"
      cityOffers={sortCityOffers(sortingType, cityOffers)}
    />
  );
};

SortedOffersList.propTypes = {
  sortingType: PropTypes.string.isRequired,
  cityOffers: PropTypes.arrayOf(offerPropTypes).isRequired
};

const mapStateToProps = ({LOGIC}) => ({sortingType: LOGIC.sortingType});

export {SortedOffersList};
export default connect(mapStateToProps)(SortedOffersList);

import React from 'react';
import PropTypes from 'prop-types';

import CityTabLink from '../city-tab-link/city-tab-link.jsx';
import OffersList from '../offers-list/offers-list.jsx';

import offerPropTypes from '../prop-types/offer.proptypes.js';

const FavoritesLocations = ({cityName, offers}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <CityTabLink cityName={cityName} />
      </div>
      <div className="favorites__places">
        <OffersList
          offers={offers}
          offerCardArticleClassName="favorites__card place-card"
          offerCardDivClassName="favorites__image-wrapper"
        />
      </div>
    </li>
  );
};

FavoritesLocations.propTypes = {
  cityName: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes)
};

export default FavoritesLocations;

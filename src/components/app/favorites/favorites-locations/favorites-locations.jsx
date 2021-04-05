import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../../shared/offer-card/offer-card.jsx';

import offerPropTypes from '../../../prop-types/offer.proptypes.js';

const FavoritesLocations = ({cityName, offers}) => {
  const offerCardArticleClassName = `favorites__card place-card`;
  const offerCardDivClassName = `favorites__image-wrapper`;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer, i) => (
          <OfferCard
            key={`offer-${i}`}
            offerCardArticleClassName={offerCardArticleClassName}
            offerCardDivClassName={offerCardDivClassName}
            offer={offer}
          />
        ))}
      </div>
    </li>
  );
};

FavoritesLocations.propTypes = {
  cityName: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes)
};

export default FavoritesLocations;

import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card';

import offerPropTypes from '../prop-types/offer-prop-types';

const OffersList = ({offersListClassName, offerCardArticleClassName, offerCardDivClassName, cityOffers, selectedOfferId}) => {
  const sortedCityOffers = selectedOfferId ? cityOffers.filter((offer) => (offer.id !== selectedOfferId)).slice(0, 3) : cityOffers;
  return (
    <div className={`places__list ` + offersListClassName}>
      {sortedCityOffers.map((offer, i) => (
        <OfferCard
          offerCardArticleClassName={offerCardArticleClassName}
          offerCardDivClassName={offerCardDivClassName}
          key={`offer-${i}`}
          offer={offer}
          cityOffers={cityOffers}
        />
      ))}
    </div>
  );
};

OffersList.propTypes = {
  offersListClassName: PropTypes.string.isRequired,
  offerCardArticleClassName: PropTypes.string.isRequired,
  offerCardDivClassName: PropTypes.string.isRequired,
  cityOffers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
  selectedOfferId: PropTypes.number
};

export default OffersList;

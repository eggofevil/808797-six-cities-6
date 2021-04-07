import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OffersList from '../../../shared/offers-list/offers-list.jsx';
import {selectSortedCityOffers} from '../../../../../store/reducers/data/selectors.js';

import offerPropTypes from '../../../../prop-types/offer.proptypes.js';

const SortedOffersList = ({sortedCityOffers}) => {

  return (
    <div className="cities__places-list tabs__content places__list">
      <OffersList
        offerCardArticleClassName="cities__place-card"
        offerCardDivClassName="cities__image-wrapper"
        offers={sortedCityOffers}
      />
    </div>
  );
};

SortedOffersList.propTypes = {
  sortedCityOffers: PropTypes.arrayOf(offerPropTypes).isRequired
};

const mapStateToProps = (state) => ({
  sortedCityOffers: selectSortedCityOffers(state)
});

export {SortedOffersList};
export default connect(mapStateToProps)(SortedOffersList);

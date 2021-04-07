import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SortingPane from '../sorting-pane/sorting-pane.jsx';
import SortedOffersList from '../sorted-offers-list/sorted-offers-list.jsx';
import CityMap from '../city-map/city-map.jsx';

import {selectCityOffers} from '../../store/reducers/data/selectors.js';

import offerPropTypes from '../prop-types/offer.proptypes.js';

const Cities = ({currentCityName, cityOffers}) => {
  return (
    <div className="cities">
      {cityOffers.length ?
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{cityOffers.length} places to stay in {currentCityName}</b>
            <SortingPane />
            <SortedOffersList cityOffers={cityOffers} />
          </section>
          <div className="cities__right-section">
            <CityMap
              mapClassName="cities"
              location={cityOffers[0].city.location}
              offers={cityOffers}
            />
          </div>
        </div>
        :
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {currentCityName}</p>
            </div>
          </section>
          <div className="cities__right-section" />
        </div>
      }
    </div>
  );
};

Cities.propTypes = {
  currentCityName: PropTypes.string.isRequired,
  cityOffers: PropTypes.arrayOf(offerPropTypes).isRequired
};

const mapStateToProps = (state) => ({
  currentCityName: state.DATA.currentCityName,
  cityOffers: selectCityOffers(state)
});

export {Cities};
export default connect(mapStateToProps)(Cities);

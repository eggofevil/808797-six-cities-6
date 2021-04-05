import React, {useEffect} from 'react';
import {useDispatch, connect} from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../shared/header/header.jsx';
import Property from './property/property.jsx';
import OffersList from '../shared/offers-list/offers-list.jsx';
import CityMap from '../shared/city-map/city-map.jsx';

import {getNearbyOffers, getOfferReviews} from '../../../store/api-actions.js';

import offerPropTypes from '../../prop-types/offer.proptypes.js';

const Room = ({state: {offer}, nearbyOffers}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNearbyOffers(offer.id));
    dispatch(getOfferReviews(offer.id));
  }, [offer]);
  window.scroll(0, 0);
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <Property offer={offer} />
          <CityMap
            mapClassName="property"
            location={offer.location}
            offers={nearbyOffers}
            selectedOffer={offer}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList
              offers={nearbyOffers}
              offersListClassName="near-places__list"
              offerCardArticleClassName="near-places__card"
              offerCardDivClassName="near-places__image-wrapper"
            />
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = ({DATA}) => ({nearbyOffers: DATA.nearbyOffers});

Room.propTypes = {
  state: PropTypes.shape({
    offer: offerPropTypes.isRequired,
  }),
  nearbyOffers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired
};

export {Room};
export default connect(mapStateToProps)(Room);

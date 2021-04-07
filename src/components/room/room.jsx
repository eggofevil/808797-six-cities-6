import React, {useEffect} from 'react';
import {useDispatch, connect} from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../header/header.jsx';
import Property from '../property/property.jsx';
import OffersList from '../offers-list/offers-list.jsx';
import CityMap from '../city-map/city-map.jsx';

import {getOffer, getNearbyOffers, getOfferReviews} from '../../store/api-actions.js';

import offerPropTypes from '../prop-types/offer.proptypes.js';

const Room = ({offer, offerId, nearbyOffers}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOffer(Number(offerId)));
  }, [offerId]);

  useEffect(() => {
    if (offer) {
      dispatch(getNearbyOffers(offerId));
      dispatch(getOfferReviews(offerId));
    }
  }, [offer]);
  window.scroll(0, 0);
  if (offer) {
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
              <div className="near-places__list places__list">
                <OffersList
                  offerCardArticleClassName="near-places__card"
                  offerCardDivClassName="near-places__image-wrapper"
                  offers={nearbyOffers}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
  return null;
};

const mapStateToProps = ({DATA}) => ({nearbyOffers: DATA.nearbyOffers, offer: DATA.currentOffer});

Room.propTypes = {
  offer: offerPropTypes,
  offerId: PropTypes.string.isRequired,
  nearbyOffers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired
};

export {Room};
export default connect(mapStateToProps)(Room);

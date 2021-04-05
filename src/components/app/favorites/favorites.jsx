import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../shared/header/header.jsx';
import Footer from '../shared/footer/footer.jsx';
import FavoritesLocations from './favorites-locations/favorites-locations.jsx';
import {getFavorites} from '../../../store/api-actions.js';

import offerPropTypes from '../../prop-types/offer.proptypes.js';

const Favorites = ({favorites}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  let offersByCities = {};

  favorites.map((offer) => {
    if (!offersByCities[`${offer.city.name}`]) {
      offersByCities[`${offer.city.name}`] = [];
    }
    offersByCities[`${offer.city.name}`].push(offer);
  });

  const FavoritesEmpty = () =>
    <div className="page page--favorites-empty">
      <Header />
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>;

  if (favorites) {
    return (
      <>
        {favorites.length ?
          <div className="page">
            <Header />
            <main className="page__main page__main--favorites">
              <div className="page__favorites-container container">
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <ul className="favorites__list">
                    {Object.keys(offersByCities).map((city, i) => <FavoritesLocations key={`location-${i}`} cityName = {city} offers={offersByCities[city]} />)}
                  </ul>
                </section>
              </div>
            </main>
            <Footer />
          </div>
          :
          <FavoritesEmpty />
        }
      </>
    );
  }
  return null;
};

const mapStateToProps = ({DATA}) => ({favorites: DATA.favorites});

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(offerPropTypes)
};

export {Favorites};
export default connect(mapStateToProps)(Favorites);

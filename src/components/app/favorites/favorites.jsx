import React from 'react';
import {connect, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import FavoritesLocations from './favorites-locations/favorites-locations.jsx';
import FavoritesEmpty from './favorites-empty/favorites-empty.jsx';
import {getFavorites} from '../../../store/api-actions.js';

import offerPropTypes from '../../prop-types/offer.proptypes.js';

const Favorites = ({favorites}) => {
  const dispatch = useDispatch();
  dispatch(getFavorites);
  const Element = favorites.length ? FavoritesLocations : FavoritesEmpty;
  return (
    <>
      <Element />
    </>
  );
};

const mapStateToProps = ({DATA}) => ({favorites: DATA.favorites});

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(offerPropTypes)
};

export {Favorites};
export default connect(mapStateToProps)(Favorites);

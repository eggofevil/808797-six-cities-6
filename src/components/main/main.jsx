import React, {useEffect} from 'react';
import {useDispatch, connect} from 'react-redux';
import Header from '../header/header.jsx';
import CitiesPane from '../cities-pane/cities-pane.jsx';
import Cities from '../cities/cities.jsx';
import PropTypes from 'prop-types';

import {getHotels} from '../../store/api-actions.js';
import offerPropTypes from '../prop-types/offer.proptypes.js';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotels());
  }, []);

  return (
    <div className="page page--gray page--main">
      <Header mainPageLinkDisabled={true} />
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesPane />
        <Cities />
      </main>
    </div>
  );
};

const mapStateToProps = ({DATA}) =>({offers: DATA.offers});

Main.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
};

export default connect(mapStateToProps)(Main);

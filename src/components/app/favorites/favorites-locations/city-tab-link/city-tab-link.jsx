import React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {setCurrentCity} from '../../../../../store/reducers/data/action-creator.js';

const CityTabLink = ({cityName}) => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(setCurrentCity(cityName));

  return (
    <Link className="locations__item-link" to="/" onClick={handleClick}>
      <span>{cityName}</span>
    </Link>
  );
};

CityTabLink.propTypes = {
  cityName: PropTypes.string.isRequired
};

export default CityTabLink;

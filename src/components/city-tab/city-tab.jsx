import React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import {setCurrentCity} from '../../store/reducers/data/action-creator.js';

const CityTab = ({cityName, tabClassName}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentCity(cityName));
  };

  return (
    <li className="locations__item">
      <a className={tabClassName} onClick={handleClick}>
        <span>{cityName}</span>
      </a>
    </li>
  );
};

CityTab.propTypes = {
  cityName: PropTypes.string.isRequired,
  tabClassName: PropTypes.string.isRequired,
};

export default CityTab;

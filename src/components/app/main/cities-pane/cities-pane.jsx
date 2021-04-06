import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CityTab from './city-tab/city-tab.jsx';

import {CityName} from '../../../../const.js';

const CitiesPane = ({currentCityName}) => {
  const elementClassName = `locations__item-link tabs__item`;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CityName).map((value, id) => {
            return (
              <CityTab key={`city-${id}`} cityName={value} tabClassName={value === currentCityName ? elementClassName + ` tabs__item--active` : elementClassName} />
            );
          })}
        </ul>
      </section>
    </div>
  );
};

const mapStateToProps = ({DATA}) => ({currentCityName: DATA.currentCityName});

CitiesPane.propTypes = {
  currentCityName: PropTypes.string.isRequired,
};

export {CitiesPane};
export default connect(mapStateToProps)(CitiesPane);

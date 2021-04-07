import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CityTab from '../city-tab/city-tab.jsx';

import {CityName} from '../../const.js';

const TAB_CLASS_NAME = `locations__item-link tabs__item`;

const CitiesPane = ({currentCityName}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CityName).map((value, id) => {
            return (
              <CityTab
                key={`city-${id}`}
                cityName={value}
                tabClassName={value === currentCityName ?
                  TAB_CLASS_NAME + ` tabs__item--active`
                  :
                  TAB_CLASS_NAME}
              />
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

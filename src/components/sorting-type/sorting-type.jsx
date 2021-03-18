import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {SortingTypes} from '../../const';

import SortingTypeOption from '../sorting-type-option/sorting-type-option';

const SortingType = ({handleClick, ulClassName, sortingType}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleClick}>
        {sortingType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={ulClassName}>
        {Object.values(SortingTypes).map((value, id) => (
          <SortingTypeOption key={`sortingOption-${id}`} value={value} active={value === sortingType} handleClick={handleClick} />
        ))}
      </ul>
    </form>
  );
};

const mapStateToProps = ({LOGIC}) => ({sortingType: LOGIC.sortingType});

SortingType.propTypes = {
  handleClick: PropTypes.func.isRequired,
  ulClassName: PropTypes.string.isRequired,
  sortingType: PropTypes.string.isRequired
};

export {SortingType};
export default connect(mapStateToProps)(SortingType);

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setSortingType} from '../../store/reducers/actions';

const SortingTypeOption = ({value, active, handleClick, changeSortingType}) => {
  const liClassName = active ? `places__option places__option--active` : `places__option`;
  const sortingTypeOptionHandleClick = (sortingType) => {
    handleClick();
    changeSortingType(sortingType);
  };
  return (
    <li className={liClassName} tabIndex={0} onClick={() => sortingTypeOptionHandleClick(value)}>{value}</li>
  );
};

SortingTypeOption.propTypes = {
  value: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  changeSortingType: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeSortingType(sortingType) {
    dispatch(setSortingType(sortingType));
  }
});

export {SortingTypeOption};
export default connect(null, mapDispatchToProps)(SortingTypeOption);

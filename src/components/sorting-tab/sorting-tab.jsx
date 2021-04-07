import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import {setSortingType} from '../../store/reducers/logic/action-creator.js';

const SortingTab = ({value, active, onTabClick}) => {
  const dispatch = useDispatch();
  const liClassName = active ? `places__option places__option--active` : `places__option`;
  const handleTabClick = () => {
    onTabClick();
    dispatch(setSortingType(value));
  };
  return (
    <li className={liClassName} tabIndex={0} onClick={handleTabClick}>{value}</li>
  );
};

SortingTab.propTypes = {
  value: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default SortingTab;

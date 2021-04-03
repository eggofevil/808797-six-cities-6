import React from 'react';
import PropTypes from 'prop-types';

const TestComponent4input = ({level, onChange}) => {
  const TITLE_INDEX = 0;
  const VALUE_INDEX = 1;

  return (
    <>
      <input
        onChange={onChange}
        className="form__rating-input visually-hidden"
        name="rating"
        value={level[VALUE_INDEX]}
        id={`${level[VALUE_INDEX]}-stars`}
        type="radio"
      />
      <label htmlFor={`${level[VALUE_INDEX]}-stars`} className="reviews__rating-label form__rating-label" title={level[TITLE_INDEX]}>
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
};

TestComponent4input.propTypes = {
  level: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TestComponent4input;

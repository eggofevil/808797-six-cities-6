import React from 'react';
import PropTypes from 'prop-types';

import Review from '../review/review';

import reviewPropTypes from '../prop-types/review-prop-types';

const ReviewsList = ({reviews}) => {
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, i) => (
          <Review key={`review-${i}`} review={review} />
        ))}
      </ul>
    </React.Fragment>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
};

export default ReviewsList;

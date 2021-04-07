import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Review from '../review/review.jsx';
import {selectSortedOfferReviews} from '../../store/reducers/data/selectors.js';

import reviewPropTypes from '../prop-types/review.proptypes.js';

const ReviewsList = ({reviews}) => {
  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, i) => {
          if (i > 9) {
            return null;
          }
          return (
            <Review key={`review-${i}`} review={review} />
          );
        })}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({reviews: selectSortedOfferReviews(state)});

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
};

export {ReviewsList};
export default connect(mapStateToProps)(ReviewsList);

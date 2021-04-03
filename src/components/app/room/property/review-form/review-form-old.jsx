import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import {postReview} from '../../../../../store/api-actions.js';

const ReviewForm = ({offerId}) => {
  const [formState, setFormState] = useState({
    disabled: false
  });

  const [userInput, setUserInput] = useState({
    comment: ``,
    rating: ``
  });

  console.log(userInput);

  const dispatch = useDispatch();

  const submitDisabled = userInput.rating && (userInput.comment.length >= 5) && (userInput.comment.length <= 300) ?
    false : true;

  function handleChange(evt) {
    evt.persist();
    setUserInput((previousState) => ({
      ...previousState,
      [evt.target.name]: evt.target.value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setFormState({disabled: true});
    setUserInput({
      comment: ``,
      rating: ``
    });
    dispatch(postReview(offerId, userInput, setFormState));
    const form = document.getElementsByClassName(`reviews__form form`)[0];
    const ratingInputs = [...document.getElementsByClassName(`form__rating-input visually-hidden`)];
    form.reset();
    ratingInputs.map((ratingInput) => {
      ratingInput.checked = ``;
    });
  }

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <fieldset disabled={formState.disabled}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input onChange={handleChange} className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio" />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input onChange={handleChange} className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input onChange={handleChange} className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input onChange={handleChange} className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input onChange={handleChange} className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </div>
        <textarea onChange={handleChange} className="reviews__textarea form__textarea" id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={userInput.comment} />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={submitDisabled}>Submit</button>
        </div>
      </fieldset>
    </form>
  );
};

ReviewForm.propTypes = {
  offerId: PropTypes.number.isRequired,
};

export default ReviewForm;

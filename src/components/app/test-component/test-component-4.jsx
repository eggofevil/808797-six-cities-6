import React, {useState} from 'react';

import TestComponent4input from './test-component-4-input.jsx';

const TestComponent = () => {

  const [userInput, setUserInput] = useState({
    comment: ``,
    rating: ``
  });

  function handleChange(evt) {
    evt.persist();
    setUserInput((previousState) => ({
      ...previousState,
      [evt.target.name]: evt.target.value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setUserInput({
      comment: ``,
      rating: ``
    });
  }

  const RatingLevels = {
    'perfect': 5,
    'good': 4,
    'not bad': 3,
    'badly': 2,
    'terribly': 1
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RatingLevels).map((entry, i) =>
          <TestComponent4input key={`input-${i}`} onChange={handleChange} level={entry} />)
        }
      </div>
      <textarea onChange={handleChange} className="reviews__textarea form__textarea" id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" value={userInput.comment} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default TestComponent;

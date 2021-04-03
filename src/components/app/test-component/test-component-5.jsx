//управляемая форма
import React, {useState} from 'react';

const TestComponent = () => {
  const [rating, setRating] = useState();
  const [comment, setComment] = useState();

  console.log(rating);
  console.log(comment);

  function handleRatingChange(evt) {
    setRating(evt.target.value);
  }

  function handleCommentChange(evt) {
    setComment(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setRating(``);
    setComment(``);
    const form = document.getElementById(`form`);
    form.reset();
    const inputs = [...document.getElementsByClassName(`myInput`)];
    inputs.map((element) => {
      element.checked = ``;
    });
  }

  return (
    <form onSubmit={handleSubmit} id="form">
      <input
        className="myInput"
        onChange={handleRatingChange}
        name="rating"
        value={1}
        id={`1`}
        type="radio"
      />
      <input
        className="myInput"
        onChange={handleRatingChange}
        name="rating"
        value={2}
        id={`2`}
        type="radio"
      />
      <input
        className="myInput"
        onChange={handleRatingChange}
        name="rating"
        value={3}
        id={`3`}
        type="radio"
      />
      <input
        className="myInput"
        onChange={handleRatingChange}
        name="rating"
        value={4}
        id={`4`}
        type="radio"
      />
      <textarea
        onChange={handleCommentChange}
        id="review"
        name="comment"
        value={comment}
      />
      <button type="submit">Submit</button>
      <div>{rating}</div>
      <div>{comment}</div>
    </form>
  );
};

export default TestComponent;

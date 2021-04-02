// Попытка получить все reviews разом (пока неудачная)

import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const TestComponent = () => {
  const dispatch = useDispatch();
  // const [comments, setComments] = useState(null);
  // const [review, setReview] = useState([]);
  const offers = useSelector((state) => state.DATA.offers);

  let reviews = [];

  const getReview = (offerId) => (dispatch, _getState, api) => {
    return api.get(`/comments/${offerId}`)
      .then(({data}) => {
        reviews = reviews.concat(data);
        console.log(reviews);
      });
  };

  const fillReviews = () => {
    offers.map((offer) => dispatch(getReview(offer.id)));
    console.log(reviews);
  };

  useEffect(() => {
    fillReviews();
  }, []);

  return (
    <div>
      <h1>TestComponent</h1>
    </div>
  );
};

export default TestComponent;

/* !!!! Разобрать!!!!

  Если вы хотите выполнить все Обещания параллельно, я бы предложил просто вернуть результат getResult с map() и сгенерировать массив Обещаний. Обещания будут выполняться последовательно, но в конечном итоге будут выполняться параллельно.

const resultsPromises = indicators.map(getResult);
Затем вы можете дождаться всех обещаний и получить разрешенные результаты, используя Promise.all():

const data = [1, 2, 3];

const getResult = x => new Promise(res => {
  return setTimeout(() => {
    console.log(x);
    res(x);
  }, Math.random() * 1000)
});

Promise.all(data.map(getResult)).then(console.log);
*/

  /*
  const fillComments = () => {
    return offers.map((offer) => dispatch(getReview(offer.id)));
  };

  console.log(fillComments());
  */
  /*
  const getReview = (offerId, newComments) => (dispatch, _getState, api) => (
    api.get(`/comments/${offerId}`)
      .then(({data}) => {
        console.log(data);
      })
  );

  const fillComments = () => {
    let newComments = [];
    offers.map((offer, i) => {
      if (i > 10) {
        return null;
      }
      return dispatch(getReview(offer.id, newComments));
    });
    return console.log(newComments);
  };
  useEffect(() => {
    fillComments();
  }, []);
  */

  // fillComments();
  /*
  useEffect(() => {
    setComments(fillComments());
  }, []);
  */


/*
export const getHotels = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      dispatch(setOffers(data));
      dispatch(setCurrentCity(data[FIRST_OFFER_INDEX].city.name));
    })
);
*/

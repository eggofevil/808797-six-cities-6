import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Header from '../shared/header/header.jsx';
import CitiesPane from './cities-pane/cities-pane.jsx';
import Cities from './cities/cities.jsx';

import {getHotels} from '../../../store/api-actions.js';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotels());
  }, []);

  return (
    <div className="page page--gray page--main">
      <Header mainPageLinkDisabled={true} />
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesPane />
        <Cities />
      </main>
    </div>
  );
};

export default Main;

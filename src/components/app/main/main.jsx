import React from 'react';

import Header from '../shared/header/header.jsx';
import CitiesPane from './cities-pane/cities-pane.jsx';
import Cities from './cities/cities.jsx';

const Main = () => {
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

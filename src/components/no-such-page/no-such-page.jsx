import React from 'react';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

const NoSuchPage = () => {
  return (
    <div className="page page--favorites-empty">
      <Header />
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">404 no such page</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Looks like there is no page with such address...</b>
              <p className="favorites__status-description"></p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NoSuchPage;

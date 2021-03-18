import React from 'react';
import PropTypes from 'prop-types';
import {createAPI} from '../../services/api';

class TestComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offers: null
    };
  }

  componentDidMount() {
    const api = createAPI();
    const getCityOffers = (data, city) => {
      return data.filter((offer) => offer.city.name === city);
    };
    let cityOffers;
    const getOffers = () => api.get(`/hotels`).then(({data}) => {
      cityOffers = getCityOffers(data, `Amsterdam`);
      console.log(cityOffers);
    });
    getOffers();
    // const response = getCityOffers();
    /*
    const testApi = () => {
      return api.get(`/hotels`).then(({data}) => {
        console.log(data);
      });
    };
    */
    // console.log(testApi());
    // console.log(getCityOffers(`Amsterdam`));
    // console.log(Object.keys(response));
  }

  render() {
    return (
      <div>
        <p>Hello world!!!</p>
        <p>Test component</p>
      </div>
    );
  }
}

TestComponent.propTypes = {
};

export default TestComponent;

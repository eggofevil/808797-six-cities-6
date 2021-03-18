import React from 'react';
import PropTypes from 'prop-types';
import {getReviews} from '../store/api-actions';

function withReviewsList(Component) {
  return class WithReviewsList extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        reviews: []
      };
      this._setReviews = this._setReviews.bind(this);
    }

    _setReviews(reviews) {
      this.setState({reviews});
    }

    componentDidMount() {
      const {offerId} = this.props;
      getReviews(offerId, this._setReviews);
    }

    render() {
      WithReviewsList.propTypes = {
        offerId: PropTypes.number.isRequired
      };
      return <Component reviews={this.state.reviews} />;
    }
  };
}

export default withReviewsList;

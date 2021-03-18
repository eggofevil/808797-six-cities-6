import React from 'react';

function withReviewForm(Component) {
  return class WithReviewForm extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: ``,
        review: ``
      };
      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleChange = this._handleChange.bind(this);
      this._evaluateForm = this._evaluateForm.bind(this);
    }

    _evaluateForm() {
      return this.state.rating.length && this.state.review.length >= 50 ? false : true;
    }

    _handleSubmit(evt) {
      evt.preventDefault();
    }
    _handleChange(evt) {
      this.setState({[evt.target.name]: evt.target.value});
    }

    render() {
      return <Component handleSubmit={this._handleSubmit} handleChange={this._handleChange} evaluateForm={this._evaluateForm} />;
    }
  };
}

export default withReviewForm;

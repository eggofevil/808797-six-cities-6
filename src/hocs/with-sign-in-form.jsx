import React from 'react';

function withSignInForm(Component) {
  return class WithSignInForm extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        email: ``,
        password: ``
      };
      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleChange = this._handleChange.bind(this);
    }

    _handleSubmit(evt) {
      evt.preventDefault();
    }

    _handleChange(evt) {
      this.setState({[evt.target.name]: evt.target.value});
    }

    render() {
      return <Component handleSubmit={this._handleSubmit} handleChange={this._handleChange}/>;
    }
  };
}

export default withSignInForm;

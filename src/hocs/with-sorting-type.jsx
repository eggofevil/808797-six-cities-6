import React from 'react';

function withSortingType(Component) {
  return class WithSortingType extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        active: false
      };
      this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
      this.setState((state) => ({active: !state.active}));
    }

    render() {
      const ulClassName = `places__options places__options--custom${this.state.active ? ` places__options--opened` : ``}`;
      return <Component ulClassName={ulClassName} handleClick={this._handleClick} />;
    }
  };
}

export default withSortingType;

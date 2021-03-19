import React from 'react';

function withCityMap(Component) {
  return class WithCityMap extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        map: null
      };
      this._setMap = this._setMap.bind(this);
    }
    _setMap(newMap) {
      this.setState({map: newMap});
    }
    render() {
      return <Component {...this.props} setMap={this._setMap} map={this.state.map} />;
    }
  };
}

export default withCityMap;

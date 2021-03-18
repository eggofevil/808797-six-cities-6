import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';

import offerPropTypes from '../prop-types/offer-prop-types';

class CityMap extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _setMapView() {
    const {map, location, mapClassName, activeCard} = this.props;
    let coords;
    let zoom;
    if (mapClassName === `property` && activeCard) {
      coords = [activeCard.location.latitude, activeCard.location.longitude];
      zoom = activeCard.location.zoom;
    } else {
      coords = [location.latitude, location.longitude];
      zoom = location.zoom;
    }
    map.setView(coords, zoom);
  }

  _setMapIcons() {
    const {map, cityOffers, selectedOfferId, activeCard} = this.props;
    const inactivePin = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 40]
    });
    const activePin = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 40]
    });
    cityOffers.map((offer) => {
      let icon;
      if (activeCard) {
        icon = (offer.id === activeCard.id || offer.id === selectedOfferId) ? activePin : inactivePin;
      } else {
        icon = offer.id === selectedOfferId ? activePin : inactivePin;
      }
      leaflet.marker([offer.location.latitude, offer.location.longitude], {icon}).addTo(map);
    });
  }

  componentDidMount() {
    const {setMap} = this.props;
    const map = leaflet.map(`map`, {
      zoomControl: false,
      marker: true
    });
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);
    setMap(map);
  }

  componentDidUpdate() {
    this._setMapView();
    this._setMapIcons();
  }

  render() {
    return <section id="map" className={`${this.props.mapClassName}__map map`} />;
  }
}

CityMap.propTypes = {
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }).isRequired,
  cityOffers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
  selectedOfferId: PropTypes.number,
  activeCard: offerPropTypes,
  mapClassName: PropTypes.string.isRequired,
  map: PropTypes.object,
  setMap: PropTypes.func.isRequired
};

const mapStateToProps = ({LOGIC}) => ({activeCard: LOGIC.activeCard});

export {CityMap};
export default connect(mapStateToProps)(CityMap);

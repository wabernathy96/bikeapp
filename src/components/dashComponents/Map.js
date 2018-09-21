import React, { Component } from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import "../assets/dashboard.css";


class Map extends Component {

  componentDidMount() {
    L.map('map', {
      center: [51.505, -0.09],
      zoom: 13
    });
  }

  render() {
    return (
      <div id="map">

      </div>
    )
  }
}

export default Map;
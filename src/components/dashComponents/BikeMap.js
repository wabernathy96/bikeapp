import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "../assets/dashboard.css";


class BikeMap extends Component {

  render() {
    const position = [29.8240, -95.4602];
    return (
      <Map id="map" center={position} zoom={10}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
    )
  }
}

export default BikeMap;

// -95.9862,29.4133,9-4.9397,30.2164
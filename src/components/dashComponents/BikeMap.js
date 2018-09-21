import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "../assets/dashboard.css";
import { mapbox } from "../../utils/keys/keys.json";


class BikeMap extends Component {

  render() {
    const position = [51.505, -0.09];
    return (
      <Map id="map" center={position} zoom={13}>
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
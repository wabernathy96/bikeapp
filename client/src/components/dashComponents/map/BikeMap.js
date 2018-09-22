import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Map, TileLayer } from "react-leaflet";

import DataMarker from "./DataMarker";

import "../../assets/dashboard.css";

const defaultViewport = {
  center: [29.8240, -95.4602],
  zoom: 10
}


class BikeMap extends Component {
  state = {
    viewport: defaultViewport,
  }

  onClickReset = () => {
    this.setState({ viewport: defaultViewport })
  }

  onViewportChanged = viewport => {
    this.setState({ viewport })
  }

  render() {
    return (

      <Map
        onClick={this.onClickReset}
        onViewportChanged={this.onViewportChanged}
        viewport={this.state.viewport}
        id="map"
      >
        <div><DataMarker /></div>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    )
  }
}

export default BikeMap;

// -95.9862,29.4133,9-4.9397,30.2164 = Houston coordinates
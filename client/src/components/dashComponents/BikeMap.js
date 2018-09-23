import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Map, TileLayer, GeoJSON } from "react-leaflet";


import "../assets/dashboard.css";

const defaultViewport = {
  center: [29.8240, -95.4602],
  zoom: 10
}

class BikeMap extends Component {
  constructor() {
    super();

    this.state = {
      viewport: defaultViewport,
    }
  }

  getStyle(feature, layer) {
    return {
      color: '#8d5cbd',
      weight: 5,
      opacity: 0.65
    }
  }

  onClickReset = () => {
    this.setState({ viewport: defaultViewport })
  }

  onViewportChanged = viewport => {
    this.setState({ viewport })
  }

  render() {
    const { dataActive, dataPoints } = this.props.data;

    return (
      <Map
        onClick={this.onClickReset}
        onViewportChanged={this.onViewportChanged}
        viewport={this.state.viewport}
        id="map"
      >
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {dataActive ? <GeoJSON data={dataPoints} style={this.getStyle()} /> : null}
      </Map>
    )
  }
}

BikeMap.propTypes = {
  data: PropTypes.object.isRequired
}

const mapStateToProps = state => (
  {
    data: state.data
  }
)

export default connect(mapStateToProps)(BikeMap);

// -95.9862,29.4133,9-4.9397,30.2164 = Houston coordinates
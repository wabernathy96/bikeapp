import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Map, TileLayer, GeoJSON, Marker } from "react-leaflet";
import { clusterData, unclusterData } from "../../actions/dataActions";

import "../assets/dashboard.css";

const defaultViewport = {
  center: [29.8240, -95.4602],
  zoom: 10
}

const markers = [];

class BikeMap extends Component {
  constructor() {
    super();

    this.state = {
      viewport: defaultViewport,
      mapPoint: {
        lat: 29.8,
        lng: -95.5
      }
    }
  }

  componentWillReceiveProps(nextprops) {
    let { dataActive, dataPoints } = nextprops.data;
    let point = {}

    if (dataActive === true) {
      // If the data is being pulled, split the coordinate arrays into a point object
      // Push the point object into a global "markers" array
      for (let i = 0; i < dataPoints.features.length; i++) {
        point.lat = dataPoints.features[i].geometry.coordinates[0]
        point.lng = dataPoints.features[i].geometry.coordinates[1]

        markers.push(point)

        console.log(`MARKERS FILLED: ${markers}`)
      }
    } else if (dataActive === false) {
      // Empty the "markers" array when the dataActive prop = false
      markers.length = 0;

      console.log(`MARKERS EMPTY: ${markers}`)
    }
  }

  componentDidUpdate() {

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
        {/* {dataActive ? <GeoJSON data={dataPoints} /> : null} */}

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
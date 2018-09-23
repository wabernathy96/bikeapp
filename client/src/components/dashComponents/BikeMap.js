import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
// import MarkerClusterGroup from "react"
import Leaflet from "leaflet";
import { Map, TileLayer, GeoJSON, Marker } from "react-leaflet";
import { clusterData, unclusterData } from "../../actions/dataActions";

import "../assets/dashboard.css";

const defaultViewport = {
  center: [29.8240, -95.4602],
  zoom: 10
}

const markers = [];

// const markerStyle = Leaflet.icon({
//   iconUrl: "../assets/point.png"
// })

class BikeMap extends Component {
  constructor() {
    super();

    this.state = {
      viewport: {
        center: [29.8240, -95.4602],
        zoom: 10
      }
    }
  }

  componentWillReceiveProps(nextprops) {
    let { dataActive, dataPoints } = nextprops.data;
    

    if (dataActive === true) {
      // If the data is being pulled, split the coordinate arrays into a point object
      // Push the point object into a global "markers" array
      // Note: Coords are reversed bc of transfer between legacy leaflet vs geoJSON
      for (let i = 0; i < dataPoints.features.length; i++) {
        let point = {}
        point.lat = dataPoints.features[i].geometry.coordinates[1];
        point.lng = dataPoints.features[i].geometry.coordinates[0];

        markers.push(point)
        console.log("MARKERS FILLED")
      }
    } else if (dataActive === false) {
      // Empty the "markers" array when the dataActive prop = false
      markers.length = 0;

      console.log(`MARKERS EMPTY`)
    }
  }

  onClickReset = () => {
    this.setState({ viewport: defaultViewport })
  }

  onViewportChanged = viewport => {
    this.setState({ viewport })
  }

  render() {
    const { dataActive } = this.props.data;
    let markerDisplay;

    if (dataActive) {
      markerDisplay = markers.map((position, i) =>
        <Marker position={position} key={i}  />
      )
    } else {
      markerDisplay = null;
    }

    return (
      <Map
        onClick={this.onClickReset}
        onViewportChanged={this.onViewportChanged}
        viewport={this.state.viewport}
        id="bikemap"
      >
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* {dataActive ? <GeoJSON data={dataPoints} /> : null} */}
        <div className="leaflet-pane leaflet-marker-pane">{markerDisplay}</div>
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
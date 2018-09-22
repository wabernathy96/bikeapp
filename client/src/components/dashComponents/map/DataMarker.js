import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDataPoints } from "../../../actions/dataActions";

class DataMarker extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1> PASS DATA HERE </h1>
      </div>
    )
  }
}

DataMarker.propTypes = {
  data: PropTypes.object.isRequired
}

const mapStateToProps = state => (
  {
    data: state.data
  }
)

export default connect(mapStateToProps)(DataMarker);
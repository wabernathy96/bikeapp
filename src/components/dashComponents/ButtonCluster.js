import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddData from "./addData/AddData";
import AddClusters from "./addCluster/AddClusters";

class ButtonCluster extends Component {
  render() {
    return (
      <div>
        <AddData />
        <AddClusters />
      </div>
    )
  }
}


export default ButtonCluster;
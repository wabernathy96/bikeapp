import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddData from "./AddData";
import AddClusters from "./AddClusters";

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
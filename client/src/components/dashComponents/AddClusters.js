import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwapVerticalCircle from "@material-ui/icons/SwapVerticalCircle";
import SwapHorizontalCircle from "@material-ui/icons/SwapHorizontalCircle";
import { clusterData, unclusterData } from "../../actions/dataActions";

class AddClusters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  render() {
    const { dataActive } = this.props.data;
    return (
      <div>
        <ListItem
          disabled={dataActive ? false : true}
          button divider
          onClick={this.onClick}
        >
          <ListItemIcon>
            {this.state.active ? <SwapHorizontalCircle /> : <SwapVerticalCircle />}
          </ListItemIcon>
          <ListItemText primary={this.state.active ? "Scatter Data" : "Cluster Data"} />
        </ListItem>
      </div>
    )
  }
}

AddClusters.propTypes = {
  data: PropTypes.object.isRequired
}

const mapStateToProps = state => (
  {
    data: state.data
  }
)

export default connect(mapStateToProps)(AddClusters);
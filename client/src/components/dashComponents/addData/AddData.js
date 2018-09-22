import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddLocation from '@material-ui/icons/AddLocation';
import LocationOff from "@material-ui/icons/LocationOff";
import { getDataPoints, clearDataPoints } from "../../../actions/dataActions";

class AddData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }

    this.onClick = this.onClick.bind(this);
  }


  onClick = (e) => {
    e.preventDefault();

    // Change active state
    this.setState(prevState => ({
      active: !prevState.active
    }));


    (this.state.active
      ? this.props.clearDataPoints()
      : this.props.getDataPoints()
    )
  }


  render() {
    return (
      <div>
        <ListItem button divider onClick={this.onClick} >
          <ListItemIcon>
            {this.state.active ? <LocationOff /> : <AddLocation />}
          </ListItemIcon>
          <ListItemText
            primary={this.state.active ? "Remove Data" : "Add Data"}
          />
        </ListItem>
      </div>
    )
  }
}

AddData.propTypes = {
  getDataPoints: PropTypes.func.isRequired,
  clearDataPoints: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

const mapStateToProps = state => (
  {
    data: state.data
  }
)

export default connect(mapStateToProps, { getDataPoints, clearDataPoints })(AddData);
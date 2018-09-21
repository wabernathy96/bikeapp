import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PinDrop from "@material-ui/icons/PinDrop";
import LocationOff from "@material-ui/icons/LocationOff";

class AddClusters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }

    this.changeIcon = this.changeIcon.bind(this);
  }


  changeIcon = (e) => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  render() {
    return (
      <div>
        <ListItem button divider onClick={this.changeIcon}>
          <ListItemIcon>
            {this.state.active ? <LocationOff /> : <PinDrop />}
          </ListItemIcon>
          <ListItemText primary="Add Clusters" />
        </ListItem>
      </div>
    )
  }
}


export default AddClusters;
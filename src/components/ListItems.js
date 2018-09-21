import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddLocation from '@material-ui/icons/AddLocation';
import PinDrop from "@material-ui/icons/PinDrop";
import Terrain from "@material-ui/icons/Terrain";
import LocationOff from "@material-ui/icons/LocationOff";

export default class ListItems extends Component {
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
        <ListItem button divider onClick={this.changeIcon} >
          <ListItemIcon>
            <AddLocation />
          </ListItemIcon>
          <ListItemText primary="Add Data" />
        </ListItem>
        <ListItem button divider onClick={this.changeIcon}>
          <ListItemIcon>
            <PinDrop />
          </ListItemIcon>
          <ListItemText primary="Add Clusters" />
        </ListItem>
        <ListItem button divider onClick={this.changeIcon}>
          <ListItemIcon>
            <Terrain />
          </ListItemIcon>
          <ListItemText primary="Map" />
        </ListItem>
      </div>
    )
  }
}

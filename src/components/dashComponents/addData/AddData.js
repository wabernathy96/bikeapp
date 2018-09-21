import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddLocation from '@material-ui/icons/AddLocation';
import LocationOff from "@material-ui/icons/LocationOff";



class AddData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }

    this.onClick = this.onClick.bind(this);
  }


  onClick = (e) => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }


  render() {
    return (
      <div>
        <ListItem button divider onClick={this.onClick} >
          <ListItemIcon>
            {this.state.active ? <LocationOff /> : <AddLocation />}
          </ListItemIcon>
          <ListItemText primary="Add Data" />
        </ListItem>
      </div>
    )
  }
}

export default AddData;
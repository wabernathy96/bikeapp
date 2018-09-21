import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <Dashboard />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

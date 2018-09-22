import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store";
import CssBaseline from '@material-ui/core/CssBaseline';

import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <CssBaseline />
          <div className="App">
            <Dashboard />
          </div>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;

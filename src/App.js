import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { Router, Switch } from "react-router-dom";
import { NavigationBar } from "./components";
import Routes from "./Routes";
import store from "./store";
import history from "./history";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <NavigationBar />
          <div>
            <Switch>
              <Routes />
            </Switch>
          </div>
        </Router>
        <Fragment className="App"></Fragment>
      </Provider>
    );
  }
}

export default App;

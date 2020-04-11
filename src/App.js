import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment className="App"></Fragment>
      </Provider>
    );
  }
}

export default App;

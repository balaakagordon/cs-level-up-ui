import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import NavigationLinks from "./NavigationLinks";
// import history from "../../history";

const NavigationBar = () => {
  return (
    <ul>
      <NavigationLinks />
    </ul>
  );
};

const mapStateToProps = (state) => ({
  // authenticated: state.navbar.authenticated
});

export default withRouter(connect(mapStateToProps, {})(NavigationBar));

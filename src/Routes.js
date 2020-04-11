import React from "react";
import { Route } from "react-router-dom";
import Algorithms from "./components/Algorithms";
import Landing from "./components/Landing";
import Notes from "./components/Notes";
import About from "./components/About";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/algorithms" component={Algorithms} />
      <Route exact path="/notes" component={Notes} />
      <Route exact path="/about" component={About} />
    </div>
  );
};

export default Routes;

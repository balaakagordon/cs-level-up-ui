import React from 'react';
import { Route } from 'react-router-dom';
import { Landing } from './components';


const Routes = () => {
  return <Route exact path="/" component={Landing} />;
};

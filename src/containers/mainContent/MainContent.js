import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from 'containers/navBar/NavBar';
import Header from 'containers/header/Header';
import Dashboard from 'containers/dashboard/Dashboard.js';
import Cases from 'containers/cases/Cases.js';
import './MainContent.css';
import 'bootstrap/dist/css/bootstrap.css';

const MainContent = () => (
  <div className="full-height">
    <div className="full-height left-nav-bar-container">
      <NavBar />
    </div>
    <div className="main-content full-height">
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/cases" component={Cases} />
      </Switch>
    </div>
  </div>
);

export default MainContent;

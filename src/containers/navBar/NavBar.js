import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <div className="left-pane full-height">
    <div className="quick-link">
      <Link to="/">
        <i className="fa fa-home" />
        Home
      </Link>
    </div>
    <div className="quick-link">
      <Link to="/topics">
        <i className="fa fa-suitcase" />
        Topics & Trends
      </Link>
    </div>
    <div className="quick-link">
      <Link to="/databases">
        <i className="fa fa-database" />
        Databases
      </Link>
    </div>
    <div className="quick-link">
      <Link to="/cases">
        <i className="fa fa-bullhorn" />
        Cases
      </Link>
    </div>
  </div>
);

export default NavBar;

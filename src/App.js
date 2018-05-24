import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import MainContent from 'containers/mainContent/MainContent';
import Login from 'containers/login/Login';

import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="app full-height">
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route component={MainContent}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;

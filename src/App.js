import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import MainContent from 'containers/mainContent/MainContent';
import Login from 'containers/login/Login';
import SignUp from 'containers/signUp/SignUp';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';

import './asset/css/reset.css'
import './asset/css/style.css'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="app full-height">
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={SignUp}/>
          <Route component={MainContent}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;

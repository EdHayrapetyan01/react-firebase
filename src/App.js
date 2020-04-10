import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import EditClient from './components/clients/EditClient';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/auth';
import NotFound from './components/layout/NotFound';
import './App.css';

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path='/' component={UserIsAuthenticated(Dashboard)} />
              <Route exact path='/add/client/' component={UserIsAuthenticated(AddClient)} />
              <Route
                exact path="/client/:id" component={UserIsAuthenticated(EditClient)} />
              <Route exact path='/sign-in/' component={UserIsNotAuthenticated(SignIn)} />
              <Route exact path='/sign-up/' component={UserIsNotAuthenticated(SignUp)} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

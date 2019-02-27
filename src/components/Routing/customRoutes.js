import React from 'react';
import fakeAuth from './fakeAuth';

import {
    Route,
    Redirect
  } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
    )} />
);

export const LoginRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === false
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/inbox',
            state: { from: props.location }
          }} />
    )} />
);
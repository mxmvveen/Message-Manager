import React from 'react';
import { userLoggedIn } from 'context/authService';

import {
    Route,
    Redirect
  } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      userLoggedIn === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
    )} />
);

export const LoginRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      userLoggedIn === false
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/inbox',
            state: { from: props.location }
          }} />
    )} />
);
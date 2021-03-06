import React from 'react';
import { authenticate } from 'context/authService';
import {
  Redirect
} from 'react-router-dom';

import './Login.scss';

import { loginUser } from 'context/authService';

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = e => {
    e.preventDefault();
    authenticate(e, () => {
      loginUser();
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/inbox' } };
    const { redirectToReferrer } = this.state;
    
    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }
    return (
          <div className="login-wrapper">
              <div className="login-container">
                  <form className="message-form" onSubmit={this.login}>
                  <label htmlFor="username">
                      Username
                  </label>
                  <div>
                      <input name="title" type="text" id="username" className="input" ref={this.title} />
                  </div>
                  <label htmlFor="password">
                      Password
                  </label>
                  <div>
                      <input name="title" type="password" id="title" className="input" ref={this.title} />
                  </div>
                  <div className="submit-container">
                      <input className="submit-button" type="submit" value="Submit"/>
                  </div>
                  </form>
              </div>
          </div>
    );
  }
}

export default Login;

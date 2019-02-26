import React from 'react';
import { MessageConsumer } from 'context/context';

import './Login.scss';

class Login extends React.Component {

  formSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <MessageConsumer>
        { ({login}) => (
        <div className="login-wrapper">
          <div className="login-container">
            <form className="message-form" onSubmit={login()}>
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
        )}
        </MessageConsumer>
    );
  }
}

export default Login;

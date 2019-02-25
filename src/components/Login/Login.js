import React from 'react';
import './Login.scss';

class Login extends React.Component {

  render() {
    return (
        <div className="login-wrapper">
          <div className="login-container">
            <form className="message-form">
              <label htmlFor="username">
                Username
              </label>
              <div>
                <input name="title" type="text" id="title" className="input" ref={this.title} />
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

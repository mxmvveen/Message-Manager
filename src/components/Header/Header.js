import React from 'react';
import './Header.scss';

import { MessageConsumer } from 'context/context';

import { NavLink } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <MessageConsumer>
        { ({addMessage}) => (
        <header>
            <h1>Message Manager</h1>
            <nav>
              <ul>
                <li>
                  <NavLink to="/" exact>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/send-message" exact>Form</NavLink>
                </li>
              </ul>
            </nav>
        </header>
        )}
        </MessageConsumer>
    );
  }
}

export default Header;

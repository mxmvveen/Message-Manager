import React from 'react';
import './Header.scss';

import { NavLink } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
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
    );
  }
}

export default Header;

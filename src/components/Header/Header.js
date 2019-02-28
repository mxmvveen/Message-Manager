import React from 'react';
import './Header.scss';

import { MessageConsumer } from 'context/context';
import { NavLink, Link } from 'react-router-dom';

class Header extends React.Component {

  logout = () => {
    localStorage.clear();
  }

  render() {
    return (
      <MessageConsumer>
        { ({loggedInUser}) => (
        <header>
            <h1><Link to="/">Message Manager</Link></h1>
            <nav>
              <ul>
                {/* <li>
                  { loggedInUser === null 
                  ? <NavLink to="/" exact>Login</NavLink>
                  : <NavLink to="/inbox" exact>Inbox</NavLink>
                  }
                </li> */}
                <li>
                  <NavLink to="/inbox" exact>Inbox</NavLink>
                </li>
                <li>
                  <NavLink to="/send-message" exact>Form</NavLink>
                </li>
                {/* <li>
                  <Link to="/" onClick={this.logout}>logout</Link>
                </li> */}
              </ul>
            </nav>
        </header>
        )}
        </MessageConsumer>
    );
  }
}

export default Header;

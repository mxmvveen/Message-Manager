import React, { useContext } from 'react';
import './Header.scss';

import { MessageConsumer } from 'context/context';
import { NavLink, Link } from 'react-router-dom';

import { MessageContext } from 'context/context';

import { userInfo, userLoggedIn, logoutUser, loadData, dataLoaded, users } from 'context/authService';
import GetMessages from 'context/setContextMessages';

  const Header = () => {
  const logout = () => {
    logoutUser();
  }

  GetMessages(useContext, MessageContext, userInfo, userLoggedIn, loadData, dataLoaded, users);

    return (
      <MessageConsumer>
        { ({loggedInUser}) => (
        <header>
            <h1><Link to="/">Message Manager</Link></h1>
            <nav>
              <ul>
                <li>
                  { userLoggedIn === false 
                  ? <NavLink to="/" exact>Login</NavLink>
                  : <NavLink to="/inbox" exact>Inbox</NavLink>
                  }
                </li>
                { userLoggedIn && <li>
                  <NavLink to="/contacts" exact>Contacts</NavLink>
                </li> }
                { userLoggedIn && <li>
                  <NavLink to="/send-message" exact>Form</NavLink>
                </li> }
                { userLoggedIn && <li>
                  <Link to="/" onClick={logout}>logout</Link>
                </li>}
              </ul>
            </nav>
        </header>
      )}
      </MessageConsumer>
    );
  }

export default Header;

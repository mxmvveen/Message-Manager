import React, { useContext }  from 'react';
import './Header.scss';

import { MessageConsumer } from 'context/context';
import { NavLink, Link } from 'react-router-dom';

import { MessageContext } from 'context/context';

import { userInfo, userLoggedIn } from 'context/authService';
import GetMessages from 'context/setContextMessages';
import { loadData, dataLoaded } from 'context/authService';

// class Header extends React.Component {
const Header = () => {
  // const logout = () => {
  //   localStorage.clear();
  // }

  console.log(userInfo);

 GetMessages(useContext, MessageContext, userInfo, userLoggedIn, loadData, dataLoaded);

    return (
      <MessageConsumer>
        { ({loggedInUser}) => (
        <header>
            <h1><Link to="/">Message Manager</Link></h1>
            <nav>
              <ul>
                <li>
                  { loggedInUser === null 
                  ? <NavLink to="/" exact>Login</NavLink>
                  : <NavLink to="/inbox" exact>Inbox</NavLink>
                  }
                </li>
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

export default Header;

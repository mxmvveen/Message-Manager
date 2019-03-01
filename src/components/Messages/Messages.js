import React, { useContext } from "react";
import { MessageConsumer, MessageContext } from 'context/context';
import { Link } from 'react-router-dom';

import { userInfo, userLoggedIn, getUserMessages } from 'context/authService';

import './Messages.scss';
const Messages = () => {
    const contextUser = useContext(MessageContext);
    if (!userLoggedIn) {
      getUserMessages();
        contextUser.setMessage(userInfo);
    }
    return (
      <div className="container small-container">
        <h2>
          Messages
        </h2>
        <MessageConsumer>
          {({messages}) => (
            <ul className="message-list">
                  { messages.map((v, key) => {
                    return (<li key={key}>
                                    <Link to={v.title}>
                                      {v.title}
                                    </Link>
                              </li>);
                  })
                  }
                  </ul>
          )}
        </MessageConsumer>
      </div>
    );
}

export default Messages;

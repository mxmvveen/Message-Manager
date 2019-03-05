import React from "react";
import { MessageConsumer } from 'context/context';
import { Link } from 'react-router-dom';

// import { userInfo, userLoggedIn, getUserMessages } from 'context/authService';
// import GetMessages from 'context/setContextMessages';


import './Messages.scss';
const Messages = () => {

//  GetMessages(useContext, MessageContext, userInfo, userLoggedIn, getUserMessages);

    return (
      <div className="container small-container">
        <h2>
          Messages
        </h2>
        <MessageConsumer>
          {({messages}) => (
            <ul className="message-list">
                  { messages.map((v, key) => {
                    return (<li key={key} className={v.read ? 'read' : 'unread'}>
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

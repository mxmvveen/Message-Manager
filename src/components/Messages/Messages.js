import React, { Component } from "react";
import { MessageConsumer } from 'context/context';
import { Link } from 'react-router-dom';

import './Messages.scss';
class Messages extends Component {
  render() {
    console.log('d');
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
}

export default Messages;

import React from "react";
import { MessageConsumer } from 'context/context';
import List from 'components/List/List';

const ListData = (props) => {
  return (
      <div className="container small-container">
        <h2>
          {props.location.pathname === '/inbox' ? 'Messages' : 'Contacts' }
        </h2>
        <MessageConsumer>
          {({messages, users}) => {
            if (props.location.pathname === '/inbox' && messages.length > 0) {
              return <List data={messages} />
            } else if (props.location.pathname === '/contacts' && users !== undefined) {
              return <List data={users} />
            }
          }}
        </MessageConsumer>
      </div>
    );
}

export default ListData;

import React, { Component } from "react";
import { MessageConsumer } from 'context/context';


class Messages extends Component {
  render() {
    return (
      <div className="container">
        <MessageConsumer>
          { ({message}) => (
            <div>
              {message}
            </div>
          )}
        </MessageConsumer>
      </div>
    );
  }
}

export default Messages;

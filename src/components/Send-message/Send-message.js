import React, { Component } from 'react';
import { MessageConsumer } from 'context/context';

import './Send-message.scss';


class SendMessage extends Component {
 
  render() {
    return (
      <MessageConsumer>
        { ({addMessage}) => (
          <div className="container form-container">
          <h2>
            Send a message
          </h2>
            <form className="message-form" onSubmit={addMessage}>
              <label htmlFor="title">
                Title
              </label>
              <div>
                <input name="title" type="text" id="title" className="input" />
              </div>
              <label htmlFor="message">
                Message
              </label>
              <div>
                <textarea name="message" id="message" className="message-field" cols={30} rows={10}></textarea>
              </div>
              <div className="submit-container">
                <input className="submit-button" type="submit" value="Submit"/>
              </div>
            </form>
          </div>
        )}
      </MessageConsumer>
    );
  }
}

export default SendMessage;

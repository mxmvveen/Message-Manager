import React, { Component } from 'react';
import { MessageConsumer } from 'context/context';
import './Send-message.scss';

class SendMessage extends Component {
        
    render() {
    const { history } = this.props;
    return (
      <MessageConsumer>
        { ({addMessage}) => (
          <div className="container small-container">
            <h2>
              Send a message
            </h2>
            <form className="message-form" onSubmit={e => addMessage(e, () => {
              history.push('/inbox');
            })}>
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
                {/* <div className="message-field" id="message" contenteditable="true" placeholder="Enter text here..."></div> */}
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

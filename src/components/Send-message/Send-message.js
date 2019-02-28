import React, { Component } from 'react';
import { MessageConsumer } from 'context/context';
import { users, loggedInUser } from 'components/Routing/fakeAuth';
import './Send-message.scss';


class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.title = React.createRef();
  }

  
  // clearFields = e => {
    //   const title = this.title.current;
    //   console.log(title);
    // }
    
    render() {
    console.log(users[loggedInUser].messages, loggedInUser);
    return (
      <MessageConsumer>
        { ({addMessage}) => (
          <div className="container small-container">
            <h2>
              Send a message
            </h2>
            <form className="message-form" onSubmit={addMessage()}>
              <label htmlFor="title">
                Title
              </label>
              <div>
                <input name="title" type="text" id="title" className="input" ref={this.title} />
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

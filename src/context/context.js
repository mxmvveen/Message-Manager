import React, { Component } from 'react';
const MessageContext = React.createContext();


export class MessageProvider extends Component {
  
  state = {
      message: 'This is the initial message!',
      addMessage: this.addMessage
  }
  
  addMessage = (e) => {
    e.preventDefault();
  }
  
  render () {
    return (
      // value prop is where we define what values 
      // that are accessible to consumer components
      <MessageContext.Provider value={this.state}>
        {this.props.children}
      </MessageContext.Provider>
    )
  }
}

export const MessageConsumer = MessageContext.Consumer;
// export const AppContextProvider = ctxt.Provider;
  
// export const AppContextConsumer = ctxt.Consumer;
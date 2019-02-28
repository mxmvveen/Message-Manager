import React, { Component } from 'react';

export const MessageContext = React.createContext();
export class MessageProvider extends Component {
  
  state = {
    messages: [{
      title: 'de title',
      message: 'de message'
    }],
    addMessage: () => this.addMessage
  }

  addMessage = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const message = e.target.message.value;
    
    this.setState({
      messages: [...this.state.messages, {
        title: title,
        message: message
      }]
    });

    e.target.title.value = '';
    e.target.message.value = '';
  }

  getMessage = () => {
    
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
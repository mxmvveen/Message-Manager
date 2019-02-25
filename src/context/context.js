import React, { Component } from 'react';
const MessageContext = React.createContext();


export class MessageProvider extends Component {
  
  state = {
    users: [{
      frederik: {
        messages: []
      },
      wouter: {
        messages: []
      },
      samantha: {
        messages: []
      },
      jessy: {
        messages: []
      },
      pieter: {
        messages: []
      },
    }],
    messages: [{
      title: 'dit is de titel',
      message: 'blaat'
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
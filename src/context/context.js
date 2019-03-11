import React, { Component } from 'react';
import { saveNewMessage } from 'context/authService';
export const MessageContext = React.createContext();
export class MessageProvider extends Component {
  
  state = {
    messages: [],
    addMessage: (e, cb) => this.addMessage(e, cb),
    setMessage: val => this.setMessage(val),
    updateReadMessage: val => this.updateReadMessage(val),
    setUsers: val => this.setUsers(val)
  }

  addMessage = (e, cb) => {
    e.preventDefault();
    const title = e.target.title.value;
    const message = e.target.message.value;

    const newMessagesData = [...this.state.messages, {
      title: title,
      message: message,
      read: false
    }];
    
    this.setState({
      messages: newMessagesData
    });
    
    e.target.title.value = '';
    e.target.message.value = '';
    saveNewMessage(newMessagesData);
    cb();
  }
  
  setMessage = val => {
    this.setState({
      messages: val.messages
    });
  }
  
  setUsers = val => {
    this.setState({
      users: val
    })
  }
  
  updateReadMessage = val => {
    const { messages } = this.state;
    messages.forEach(v => {
      if (v.title === val) {
        v.read = true;
      }
    });
    saveNewMessage(messages);
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
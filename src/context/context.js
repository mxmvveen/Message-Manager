import React, { Component } from 'react';
const MessageContext = React.createContext();


export class MessageProvider extends Component {
  
  state = {
    users: {
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
    },
    messages: [{
      title: 'dit is de titel',
      message: 'blaat'
    }],
    loggedInUser: null,
    login: () => this.login,
    addMessage: () => this.addMessage
  }


  login = e => {
    const users = Object.keys(this.state.users);
    const user = e.target.username.value;

    if (users.indexOf(user) > -1) {
      this.setState({
        loggedInUser: user
      });
      localStorage.setItem('loggedin', true);
    }
    e.preventDefault();
  }
  
  addMessage = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const message = e.target.message.value;

    const loggedInUserName = this.state.loggedInUser;

    const currentUserMessages = [...this.state.users[loggedInUserName].messages, {
          title: title,
          message: message
        }];

    this.setState({
        users: {
          ...this.state.users,
          [loggedInUserName]: currentUserMessages
        }
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
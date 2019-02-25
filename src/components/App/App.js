import React, { Component } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Login from 'components/Login/Login';
import SendMessage from 'components/Send-message/Send-message';
import Messages from 'components/Messages/Messages';
import Details from 'components/Details/Details';
import { MessageProvider } from 'context/context';
// import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MessageProvider>
        <Router>
          <div className="app-wrapper">
            <Header />
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/inbox" exact component={Messages} />
              <Route path="/send-message" exact component={SendMessage} />
              <Route path="/:message_id" exact component={Details} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </MessageProvider>
    </div>
    );
  }
}

export default App;

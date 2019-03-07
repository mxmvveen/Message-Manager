import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Login from 'components/Login/Login';
import SendMessage from 'components/Send-message/Send-message';
import ListData from 'components/List/ListData';
import Details from 'components/Details/Details';
import { LoginRoute, PrivateRoute } from './customRoutes';
import { MessageProvider } from 'context/context';
import {
    BrowserRouter as Router,
    Switch
  } from 'react-router-dom';

const Routing = () => {
    return(
        <div className="App">
            <MessageProvider>
            <Router>
                <div className="app-wrapper">
                <Header />
                <Switch>
                    <LoginRoute path="/" exact component={Login} />
                    <PrivateRoute path="/inbox" exact component={ListData} />
                    <PrivateRoute path="/contacts" exact component={ListData} />
                    <PrivateRoute path="/send-message" exact component={SendMessage} />
                    <PrivateRoute path="/:message_id" exact component={Details} />
                </Switch>
                <Footer />
                </div>
            </Router>
            </MessageProvider>
        </div>
    );    
}
export default Routing;
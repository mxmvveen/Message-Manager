import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Login from 'components/Login/Login';
import SendMessage from 'components/Send-message/Send-message';
import Messages from 'components/Messages/Messages';
import Details from 'components/Details/Details';
import { LoginRoute, PrivateRoute } from './customRoutes';
import { MessageProvider } from 'context/context';

// import { MessageContext } from 'context/context';
// import { userInfo, userLoggedIn, getUserMessages } from 'context/authService';

// import GetMessages from 'context/setContextMessages';

import {
    BrowserRouter as Router,
    Switch
  } from 'react-router-dom';

const Routing = () => {
    // GetMessages(useContext, MessageContext, userInfo, userLoggedIn, getUserMessages);
    return(
        <div className="App">
            <MessageProvider>
            <Router>
                <div className="app-wrapper">
                {/* <GetMessages /> */}
                <Header />
                <Switch>
                    <LoginRoute path="/" exact component={Login} />
                    <PrivateRoute path="/inbox" exact component={Messages} />
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
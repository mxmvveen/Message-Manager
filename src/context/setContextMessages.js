// import React, { useContext } from "react";
// import { MessageConsumer, MessageContext } from 'context/context';

const GetMessages = (useContext, MessageContext, userInfo, userLoggedIn, loadData, dataLoaded) => {
    const contextUser = useContext(MessageContext);
    if (userLoggedIn && !dataLoaded) {
        contextUser.setMessage(userInfo);
        loadData();
    }
    // return <div></div>
}

export default GetMessages;
const GetMessages = (useContext, MessageContext, userInfo, userLoggedIn, loadData, dataLoaded, users) => {
    const contextUser = useContext(MessageContext);
    if (userLoggedIn && !dataLoaded) {
        contextUser.setMessage(userInfo);
        contextUser.setUsers(users);
        loadData();
    }
}

export default GetMessages;
import React from "react";
import useUserState from "./useUserState";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {

    return(
        <UserContext.Provider value={useUserState()}>
            {children}
        </UserContext.Provider>
    )
};

export default UserContextProvider;

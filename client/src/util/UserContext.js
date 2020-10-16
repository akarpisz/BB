import {createContext, useState}from "react";

const [userData, setUser] =useState({
    loggedIn: false,
    user:"",
});

UserContext = createContext({userData, setUser});

const UserContextProvider = ({ children }) => {
    return (
      <UserContext.Provider value={{ userData, setUser }}>
        {...children}
      </UserContext.Provider>
    );
  };
  
  export { UserContext, UserContextProvider };
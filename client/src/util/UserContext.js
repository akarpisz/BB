import { createContext } from "react";

export const UserContext = createContext({
    loggedIn: false,
    setUser: ()=>{}
});

// export const UserContextProvider = ({ children }) => {
//   return (
//     <UserContext.Provider value={{ userData, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

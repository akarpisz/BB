import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { loggedIn: true };
    case "logout":
      return { loggedIn: false };
    default:
      return state;
  }
};

const useUserState = () => {
  const [userState, userDispatch] = useReducer(reducer, { loggedIn: false });

  return { userState, userDispatch };
};

export default useUserState;

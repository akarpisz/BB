import React, {useState} from "react";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Main from "./components/pages/Main";
import AddPost from "./components/pages/AddPost";
import ContactDeveloper from "./components/pages/ContactDeveloper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import {UserContext} from "./util/UserContext";

function App() {
  const [userData, setUser] = useState({
    loggedIn:false
  });
  const val = {userData, setUser}

  return (
    <div className="App">
      <UserContext.Provider value={val}>
      <Nav/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contactdeveloper">
            <ContactDeveloper />
          </Route>
          <Route path="/main">
            <Main/>
          </Route>
          <Route path="/addpost">
            <AddPost/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;

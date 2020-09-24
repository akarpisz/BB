import React from "react";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactDeveloper from "./components/pages/ContactDeveloper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;

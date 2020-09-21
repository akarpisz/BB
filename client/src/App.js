import React from "react";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Switch>
          <Route exact path="/">

          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <SignIn/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

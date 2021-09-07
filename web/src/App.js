import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Home, About, Adopt, Login, SignUp} from "./pages";
import signupAdopt from "./pages/signupAdopt"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/adopt" component={Adopt} />
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/signupAdopt" exact component={signupAdopt} />
      </Switch>
    </Router>
  );
}

export default App;

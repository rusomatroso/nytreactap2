import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

const App = () =>
  <div className="container">
      <Nav />
      <Main />
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </Router>
  </div>

export default App;

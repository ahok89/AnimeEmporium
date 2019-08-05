import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./Home";
import { SignIn } from "./SignIn";
import { Profile } from "./Profile";
import { Search } from "./Search";
import { Nothing } from "./Nothing";

class App extends Component {
  render() {
    return (

<React.Fragment>
<Router>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={SignIn} />
    <Route path="/profile" component={Profile} />
    <Route path="/search" component={Search} />
    <Route component={Nothing} />
  </Switch>
</Router>
</React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Search } from "./Search";
import { WatchList } from "./WatchList";
import { NoMatch } from "./NoMatch";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import Random from "./components/Random";
import User from "./components/User";


class App extends Component {
  render() {
    return (

<React.Fragment>
<NavigationBar />
<br></br>

<User/>
<br></br>
<Random/>
<br></br>

<Router>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/search" component={Search} />
    <Route path="/watchlist" component={WatchList} />
    <Route component={NoMatch} />
  </Switch>
</Router>
</React.Fragment>
    );
  }
}

export default App;

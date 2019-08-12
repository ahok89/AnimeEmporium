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
import styled from "styled-components";

const Styles = styled.div`

.user {
color: white;
// margin-right: 705px;
}

.random {
  // margin-left: 805px;
  color: white;
}
`;


class App extends Component {
  render() {
    return (
      <Styles>
        <React.Fragment>
          <NavigationBar />
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

          <div className="container">
            <div className="row">
              <div className="col user">
                <br></br>
                <User />
              </div>

              <div className="col random">
              <br></br>
                <Random />
              </div>
            </div>
          </div>
        </React.Fragment>
      </Styles>
    );
  }
}

export default App;

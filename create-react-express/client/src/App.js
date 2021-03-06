import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { MeetUp } from "./MeetUp";
import { WatchList } from "./WatchList";
import { Search } from "./Search";
import { BokuResults } from "./BokuResults";
import { NoMatch } from "./NoMatch";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import styled from "styled-components";

const Styles = styled.div`

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
              <Route path="/meetup" component={MeetUp} />
              <Route path="/search" component={Search} />
              <Route path="/bokuresults" component={BokuResults} />
              <Route path="/watchlist" component={WatchList} />
              <Route component={NoMatch} />
            </Switch>
          </Router>

        </React.Fragment>
      </Styles>
    );
  }
}

export default App;

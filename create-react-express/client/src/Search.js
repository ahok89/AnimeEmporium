import React from "react";
import CardSearch from "./components/CardSearch";
import CardGenre from "./components/CardGenre";
import { Row, Col } from "reactstrap";
import User from "./components/User";
import Random from "./components/Random";


export const Search = () => (

  <div className="container">
    <h1>Search Results</h1>
    <br></br>
    <Row>
      <Col sm="4">
        <User />
        <br></br>
        <CardGenre />
      </Col>
<br></br>
      <Col sm="4">
        <CardSearch />
      </Col>

      <Col sm="4">
        <Random />
      </Col>
    </Row>
  </div>
)
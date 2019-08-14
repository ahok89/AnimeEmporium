import React from "react";
import CardSearch from "./components/CardSearch";
import CardGenre from "./components/CardGenre";
import { Row, Col } from "reactstrap";
import CardMeetUp from "./components/CardMeetUp";
import Random from "./components/Random";


export const Search = () => (

  <div >
    <h1>Search Results</h1>
    <br></br>
    <Row>
      <Col sm="3">
        <CardMeetUp />
        <br></br>
        <CardGenre />
      </Col>
<br></br>
      <Col sm="6">
        <CardSearch />
      </Col>

      <Col sm="3">
        <Random />
      </Col>
    </Row>
  </div>
)
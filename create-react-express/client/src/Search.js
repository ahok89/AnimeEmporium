import React from "react";
import CardSearch from "./components/CardSearch";
import CardGenre from "./components/CardGenre";
import { Row, Col } from "reactstrap";
import CardProfile from "./components/CardProfile";
import Random from "./components/Random";


export const Search = () => (

  <div >
    <h1>Search Results</h1>
    <br></br>
    <Row>
      <Col sm="3">
        <CardProfile />
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
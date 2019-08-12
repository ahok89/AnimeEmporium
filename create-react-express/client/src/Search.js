import React from "react";
import CardSearch from "./components/CardSearch";
import CardGenre from "./components/CardGenre";
import { Row, Col } from "reactstrap";


export const Search = () => (

    <div className="container">
    <h1>Search Results</h1>
    <Row>
    <Col sm="6">
        <CardSearch />
    
    </Col>
    <Col sm="6">
      <CardGenre />
        
    </Col>
  </Row>
</div>
)
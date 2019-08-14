import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardLink, CardSubtitle } from "reactstrap";

const Results = (props) => {
  return (
    <div>
      <h2>Boku No Hero Academia</h2>
      <br></br>
      <Card body outline color="secondary">
        <CardImg src="./images/boku.png" alt="Card image cap" />
        <CardLink href="/watchlist">Add to Watch/Completed List</CardLink>
        <CardBody>
          <CardSubtitle>English Title: My Hero Academia</CardSubtitle>
          <br></br>
          <CardText>TYPE: Tv</CardText>
          <CardText>STATUS: Airing Soon</CardText>
          <CardText>LICENSORS: <CardLink href="https://www.funimation.com/shows/my-hero-academia/">Funimation</CardLink></CardText>
          <CardText>STUDIOS: Bones</CardText>
          <CardText>RATING: PG-13</CardText>
          <CardText>GENRES: Action, Comedy, School, Shounen, Super Power</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Results;
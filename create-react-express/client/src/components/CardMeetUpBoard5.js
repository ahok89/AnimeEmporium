import React from "react";
import { Card, CardLink, CardText, CardBody,
  CardTitle, CardSubtitle } from "reactstrap";

const Example = (props) => {
  return (
    <div>
      <Card>
        
        <CardBody>
          <CardTitle><CardLink href="#">Who is your favorite anime character?</CardLink></CardTitle>
          <CardText>Have you ever wonder who is the most popular anime character among anime lovers? Then this event is just for you. We host this event every other Saturday of the month.</CardText>
          <CardSubtitle>Create by: anime4life</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
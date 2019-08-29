import React from "react";
import { Card, CardLink, CardText, CardBody,
  CardTitle, CardSubtitle } from "reactstrap";

const Example = (props) => {
  return (
    <div>
      <Card>
        
        <CardBody>
          <CardTitle><CardLink href="#">What is your favorite anime genre?</CardLink></CardTitle>
          <CardText>Which anime genre draws you in? Is it Mecha, Slice of Life, Thriller or another genre? Let us know by attending our weekly Sunday morning meetup. </CardText>
          <CardSubtitle>Create by: animeLover2019</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
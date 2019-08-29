import React from "react";
import { Card, CardLink, CardText, CardBody,
  CardTitle, CardSubtitle } from "reactstrap";

const Example = (props) => {
  return (
    <div>
      <Card>
        
        <CardBody>
          <CardTitle><CardLink href="#">Convention season is over so now what?</CardLink></CardTitle>
          <CardText>Want to attend another convention but the season for it is over. Why not join us for more exciting anime events? We do a monthly meetup to discuss anime related topics that end up becoming different types of events for the future. We want the anime love to keep going all year long. Come out and Support your fellow anime lover.</CardText>
          <CardSubtitle>Create by: an-y02</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
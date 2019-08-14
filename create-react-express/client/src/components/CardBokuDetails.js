import React from "react";
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle  } from "reactstrap";


const BokuDetails = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Average Score: 8.40</CardTitle>
          <CardSubtitle>Synopsis: </CardSubtitle>
          <br></br>
          <CardText>The appearance of "quirks," newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default BokuDetails;

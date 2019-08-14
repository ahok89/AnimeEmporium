import React from "react";
import { Card, CardBody } from "reactstrap";


const Example = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
        <iframe width="200" height="200" src="https://www.youtube.com/embed/D5fYOnwYkj4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
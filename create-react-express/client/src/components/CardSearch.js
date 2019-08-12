import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, } from "reactstrap";


const SearchCard = (props) => {
  return (
   
    <div>
      <Card>
        <CardImg top width="100%" src="" alt="Card image cap" />
        <CardBody>
          <CardTitle>Title: </CardTitle>
          <CardText>Description: </CardText>
        </CardBody>
      </Card>
    </div>

  );
};

export default SearchCard;
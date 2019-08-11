import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, } from "reactstrap";
  import styled from "styled-components";

const Styles = styled.div`

.App-intro {
background-color: white;
}
`;

const SearchCard = (props) => {
  return (
      <Styles>
    <div>
      <Card>
        <CardImg top width="100%" src="" alt="Card image cap" />
        <CardBody>
          <CardTitle>Title: </CardTitle>
          <CardText>Description: </CardText>
        </CardBody>
      </Card>
    </div>
    </Styles>
  );
};

export default SearchCard;
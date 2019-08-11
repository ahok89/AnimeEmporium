import React from "react";
import { Card, CardBody,
  CardTitle, Button } from "reactstrap";
import CheckBox from "./CheckBox";
import styled from "styled-components";


const Styles = styled.div`

.App-intro {
background-color: white;
}
`;

const SearchGenre = (props) => {
  return (
      <Styles>
    <div>
      <Card>
        <CardBody body>
          <CardTitle>Genre: </CardTitle>
          <CheckBox />
          <br></br>
          <Button>Update</Button>
        </CardBody>
      </Card>
    </div>
    </Styles>
  );
};

export default SearchGenre;
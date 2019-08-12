import React from "react";
import { Card, CardBody,
  CardTitle, Button } from "reactstrap";
import CheckBox from "./CheckBox";

const SearchGenre = (props) => {
  return (
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
  );
};

export default SearchGenre;
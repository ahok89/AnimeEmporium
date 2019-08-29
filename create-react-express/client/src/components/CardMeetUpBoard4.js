import React from "react";
import { Card, CardLink, CardText, CardBody,
  CardTitle, CardSubtitle } from "reactstrap";

const Example = (props) => {
  return (
    <div>
      <Card>
        
        <CardBody>
          <CardTitle><CardLink href="#">Manga need love too.</CardLink></CardTitle>
          <CardText>Even though this is an anime website we do love reading manga. If you are like me then come join our monthly manga club(book club...get it) and we can discuss the latest mangas we love. </CardText>
          <CardSubtitle>Create by: ani4lifeme</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
import React from 'react';
import { Card, CardLink, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card>
        
        <CardBody>
          <CardTitle><CardLink href="#">Do you love anime? Do you love coffee?</CardLink></CardTitle>
          <CardText>If both of answers are YES then join us for a night of anime and coffee. Which anime is your favorite? Have you ever wonder what anime people love to watch and talk about? Then come join us for the social event of your dreams. Held every first Friday of the month.</CardText>
          <CardSubtitle>Create by: JaneSmith02</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
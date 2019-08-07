import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col, FormGroup, Label, Input,
} from 'reactstrap';


const MainCard = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <Card>
                        <CardImg top width="100%" src="https://i.pinimg.com/originals/98/29/70/9829701198637e89d0dc62673a04203d.png" alt="placeholder image" />
                        <CardBody>
                            <CardTitle>Name: </CardTitle>
                            <CardSubtitle>Joined: </CardSubtitle>
                            <br></br>
                            <CardText>
                            <FormGroup row>
                                    <Label for="exampleText" sm={2}>Text Area</Label>
                                    <Col sm={10}>
                                        <Input type="textarea" name="text" id="exampleText" />
                                    </Col>
                                </FormGroup>
                            </CardText>
                        </CardBody>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default MainCard;

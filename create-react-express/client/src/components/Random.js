import React from "react";
import {
    Card, CardImg, CardBody,
    CardTitle, Row, Col } from "reactstrap";
import styled from "styled-components";

const Styles = styled.div`

.container {

}
`;


const Random = (props) => {
    return (
        <Styles>
        <div className="container">
            <Row>
                <Col>
                    <Card color="secondary">
                    <CardImg top width="100%" src="./images/doraemon.jpg" alt="RANDOM-add image here placeholder image" />
                    <CardBody>
                        <CardTitle>Doraemon </CardTitle>
                    </CardBody>
                </Card>
                    </Col>
                    </Row>
                    </div>
                    </Styles>
    );
};

export default Random;

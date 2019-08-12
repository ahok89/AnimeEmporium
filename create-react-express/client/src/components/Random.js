import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Row, Col } from 'reactstrap';
import styled from "styled-components";

const Styles = styled.div`

.container {
margin-left: 550px;
}

`;


const Random = (props) => {
    return (
        <Styles>
        <div className="container">
            <Row>
                <Col sm="5">
                    <Card color="secondary">
                    <CardImg top width="100%" src="#" alt="RANDOM-add image here placeholder image" />
                    <CardBody>
                        <CardTitle>Title: </CardTitle>
                    </CardBody>
                </Card>
                    </Col>
                    </Row>
                    </div>
                    </Styles>
    );
};

export default Random;

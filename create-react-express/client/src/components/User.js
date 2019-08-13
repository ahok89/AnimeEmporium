import React from "react";
import {
    Card, CardBody,
    CardTitle, CardText, Row, Col
} from "reactstrap";
import styled from "styled-components";

const Styles = styled.div`

.fas {
font-size: 100px;
color: white;
}

`;


const User = (props) => {
    return (
        <Styles>
            <div className="container">
                <Row>
                    <Col>
                        <Card color="secondary">
                            <CardBody>
                                <CardTitle><i class="fas fa-user-circle"></i></CardTitle>
                                <CardText>Name: </CardText>
                                <CardText>Current Anime: </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>
        </Styles>
    );
};

export default User;



// {/* <Card body inverse color="secondary"></Card>
// <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
//  */}

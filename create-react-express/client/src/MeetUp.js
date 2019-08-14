import React from "react";
import CardMeetUp from "./components/CardMeetUp";
import Random from "./components/Random";
import { Row, Col } from "reactstrap";
import styled from "styled-components";

const Styles = styled.div`

.col box {

}

`;


export const MeetUp = () => (
    <Styles>
        <div className="container">
            <h2>Meet Ups</h2>
            <br></br>

            <Row>
                <Col sm="3">
                    <CardMeetUp />
                </Col>

                <Col sm="6">
                    board
                </Col>

                <Col sm="3">
                    <Random />
                </Col>
            </Row>
        </div>

    </Styles>

)
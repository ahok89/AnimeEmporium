import React from "react";
import CardProfile from "./components/CardProfile";
import Random from "./components/Random";
import PaginationMeetUp from "./components/PaginationMeetUp";
import CardMeetUpBoard from "./components/CardMeetUpBoard";
import CardMeetUpBoard2 from "./components/CardMeetUpBoard2";
import CardMeetUpBoard3 from "./components/CardMeetUpBoard3";
import CardMeetUpBoard4 from "./components/CardMeetUpBoard4";
import CardMeetUpBoard5 from "./components/CardMeetUpBoard5";
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
                    <CardProfile />
                </Col>

                <Col sm="6">
                    <CardMeetUpBoard />
                    <CardMeetUpBoard2 />
                    <CardMeetUpBoard3 />
                    <CardMeetUpBoard4 />
                    <CardMeetUpBoard5 />
                    <br></br>
                    <PaginationMeetUp />
                </Col>

                <Col sm="3">
                    <Random />
                </Col>
            </Row>
        </div>

    </Styles>

)
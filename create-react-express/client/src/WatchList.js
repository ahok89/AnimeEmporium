import React from "react";
import Tabs from "./components/Tabs";
import CardMeetUp from "./components/CardMeetUp";
import Random from "./components/Random";
import { Row, Col } from "reactstrap";


export const WatchList = () => (
<div className="container">
<Row>
    <Col sm="3">
    <CardMeetUp />
    </Col>

    <Col sm="6">
    <Tabs />
    </Col>

    <Col sm="3">
    <Random />
    </Col>
</Row>
</div>

)


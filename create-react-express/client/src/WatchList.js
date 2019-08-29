import React from "react";
import Tabs from "./components/Tabs";
import CardProfile from "./components/CardProfile";
import Random from "./components/Random";
import { Row, Col } from "reactstrap";


export const WatchList = () => (
<div className="container">
<Row>
    <Col sm="3">
    <CardProfile />
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


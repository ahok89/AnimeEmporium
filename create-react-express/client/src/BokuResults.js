import React from "react";
import { Row, Col } from "reactstrap";
import CardBoku from "./components/CardBoku";
import CardProfile from "./components/CardProfile";
import CardBokuDetails from "./components/CardBokuDetails";
import CardBokuVideo from "./components/CardBokuVideo";
import Random from "./components/Random";


export const BokuResults = () => (

    <div className="container">
        <Row>
            <Col sm="3">
                <p><CardProfile /></p>
            </Col>
            <Col sm="4">
                <p><CardBoku /></p>
            </Col>
            <Col sm="3">
                <p><CardBokuVideo /></p>
                <p><CardBokuDetails /></p>
            </Col>
            <Col sm="2">
                <p><Random /></p>
            </Col>
        </Row>
    </div>

)



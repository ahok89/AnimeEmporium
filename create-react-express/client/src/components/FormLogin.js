import React from "react";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";

export default class Example extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="exampleEmail"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="examplePassword"/>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}
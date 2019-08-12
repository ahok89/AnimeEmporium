import React from "react";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="firstname" sm={2}>Firstname</Label>
          <Col sm={10}>
            <Input type="firstname" name="firstname" id="firstname"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="lastname" sm={2}>Lastname</Label>
          <Col sm={10}>
            <Input type="lastname" name="lastname" id="lastname"/>
          </Col>
          </FormGroup>
          <FormGroup row>
          <Label for="username" sm={2}>Username</Label>
          <Col sm={10}>
            <Input type="username" name="username" id="username"/>
          </Col>
          </FormGroup>
          
          <FormGroup row>
          <Label for="Email" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="Email"/>
          </Col> 
        </FormGroup>
        <FormGroup row>
          <Label for="Password" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="Password"/>
          </Col> 
        </FormGroup>
      </Form>
    );
  }
}
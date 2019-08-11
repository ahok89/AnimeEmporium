import React from "react";
import { Form, FormGroup } from "reactstrap";
import CheckBox from "./CheckBox";

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <CheckBox />
        </FormGroup>
      </Form>
    );
  }
}
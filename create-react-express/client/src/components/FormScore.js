import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Input>
        </FormGroup>
          
      </Form>
    );
  }
}
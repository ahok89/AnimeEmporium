import React from "react";
import Modal from "./Modal";
import Modal2 from "./Modal2";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button, Form, FormGroup, Label, Input
} from "reactstrap";
import Dropdown from "./Dropdown";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="secondary" light expand="md">
          <NavbarBrand href="/">Anime Emporium</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <Dropdown/>
              <br></br>

              <NavItem>
                <NavLink href="#">
                  <Form inline>
                    <FormGroup>
                      <Label for="exampleSearch" hidden>Search</Label>
                      <Input type="search" name="search" id="exampleSearch" placeholder="Search" />
                    </FormGroup>
                    {' '}
                    <Button>Submit</Button>
                  </Form>

                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><Modal/></NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#"><Modal2/></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

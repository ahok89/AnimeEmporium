import React from "react";
import ModalLogin from "./ModalLogin";
import ModalSignUp from "./ModalSignUp";
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
import ModalGenre from "./ModalGenre";
import styled from "styled-components";

const Styles = styled.div`

.name {
color: white;
font-size: 50px;
font-family: 'Milonga', cursive;
}
`;



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
      <Styles>
      <div>
        <Navbar color="secondary" expand="md">
          <NavbarBrand className="name" href="/">Anime Emporium</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <ModalGenre/>
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
                <NavLink href="#"><ModalLogin/></NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#"><ModalSignUp/></NavLink>
              </NavItem>

              <NavItem>
                <Button href="#">Log <i class="fas fa-sign-out-alt"></i> Out</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      </Styles>
    );
  }
}

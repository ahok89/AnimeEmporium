import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button, Form, FormGroup, Label, Input
} from "reactstrap";

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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Anime Emporium</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Genre
                  </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                    </DropdownItem>
                  <DropdownItem>
                    Option 2
                    </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                    </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
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
                <NavLink href="#">Login/Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

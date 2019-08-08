import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
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
        <Navbar color="secondary" light expand="md">
          <NavbarBrand href="/">Anime Emporium</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <Dropdown isOpen={this.state.isOpen} toggle={this.toggle}>
                <DropdownToggle>
                  Dropdown
        </DropdownToggle>
                <DropdownMenu
                  modifiers={{
                    setMaxHeight: {
                      enabled: true,
                      order: 890,
                      fn: (data) => {
                        return {
                          ...data,
                          styles: {
                            ...data.styles,
                            overflow: 'auto',
                            maxHeight: 100,
                          },
                        };
                      },
                    },
                  }}
                >
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Adventure</DropdownItem>
                  <DropdownItem>Cars</DropdownItem>
                  <DropdownItem>Comedy</DropdownItem>
                  <DropdownItem>Dementia</DropdownItem>
                  <DropdownItem>Demons</DropdownItem>
                  <DropdownItem>Mystery</DropdownItem>
                  <DropdownItem>Drama</DropdownItem>
                  <DropdownItem>Fantasy</DropdownItem>
                  <DropdownItem>Game</DropdownItem>
                  <DropdownItem>Historical</DropdownItem>
                  <DropdownItem>Horror</DropdownItem>
                  <DropdownItem>Kids</DropdownItem>
                  <DropdownItem>Magic</DropdownItem>
                  <DropdownItem>Martial Arts</DropdownItem>
                  <DropdownItem>Mecha</DropdownItem>
                  <DropdownItem>Music</DropdownItem>
                  <DropdownItem>Parody</DropdownItem>
                  <DropdownItem>Samurai</DropdownItem>
                  <DropdownItem>Romance</DropdownItem>
                  <DropdownItem>School</DropdownItem>
                  <DropdownItem>Sci Fi</DropdownItem>
                  <DropdownItem>Shoujo</DropdownItem>
                  <DropdownItem>Shounen</DropdownItem>
                  <DropdownItem>Space</DropdownItem>
                  <DropdownItem>Sports</DropdownItem>
                  <DropdownItem>Super Power</DropdownItem>
                  <DropdownItem>Vampire</DropdownItem>
                  <DropdownItem>Yaoi</DropdownItem>
                  <DropdownItem>Yuri</DropdownItem>
                  <DropdownItem>Harem</DropdownItem>
                  <DropdownItem>Slice of Life</DropdownItem>
                  <DropdownItem>Supernatural</DropdownItem>
                  <DropdownItem>Military</DropdownItem>
                  <DropdownItem>Police</DropdownItem>
                  <DropdownItem>Psychological</DropdownItem>
                  <DropdownItem>Thriller</DropdownItem>
                  <DropdownItem>Seinen</DropdownItem>
                  <DropdownItem>Josei</DropdownItem>
                </DropdownMenu>
              </Dropdown>

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
                <NavLink href="#">Login/Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

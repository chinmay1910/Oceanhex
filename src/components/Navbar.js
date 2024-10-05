import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Solutions" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action1">Solution 1</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Solution 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action3">Something else</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#features">Features</Nav.Link>
          <NavDropdown title="Pricing" id="pricingDropdown">
            <NavDropdown.Item href="#pricing1">Basic</NavDropdown.Item>
            <NavDropdown.Item href="#pricing2">Premium</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#resources">Resources</Nav.Link>
          <Nav.Link href="#use-cases">Use Cases</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search here."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-danger">
            <i className="fas fa-search"></i>
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

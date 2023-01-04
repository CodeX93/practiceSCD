import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function NAVBAR() {
  return (
    <div>
      <>
        <br />
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/Home">
              PhoneBook
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Email">
                Emails
              </Nav.Link>
              <Nav.Link as={Link} to="/Password">
                Password
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <Button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  LogOut
                </Button>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

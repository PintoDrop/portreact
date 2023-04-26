
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navigation(props) {
  return (
    <>
      <Navbar key="sm" bg="light" expand="sm" className="mb-3">
        <Container fluid>
          <Navbar.Brand className="NaviName" href="#">Michael</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$"sm"`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-$"sm"`}
            aria-labelledby={`offcanvasNavbarLabel-expand-$"sm"`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$"sm"`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 Navigation">
                <Nav.Link href="/">About Me</Nav.Link>
                <Nav.Link href="/project">Portfolio</Nav.Link>
                <Nav.Link href="/resume">Resume</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useLocation } from "react-router-dom";

function Navigation(props) {
  const { pathname } = useLocation();
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasToggle = () =>
    setShowOffcanvas((prevState) => !prevState);

  const isActive = (href) => {
    return href === pathname;
  };

  return (
    <Navbar bg="light" variant="primary" expand="sm" className="mb-3">
      <Container fluid>
        <Navbar.Brand className="NaviName" href="/">
          ~Michael Bender's Portfolio~
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-$"sm"`}
          onClick={handleOffcanvasToggle}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-$"sm"`}
          aria-labelledby={`offcanvasNavbarLabel-expand-$"sm"`}
          placement="end"
          show={showOffcanvas}
          onHide={handleOffcanvasClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$"sm"`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 Navigation">
              <Nav.Link href="/" active={isActive("/")}>
                About Me
              </Nav.Link>
              <Nav.Link href="/project" active={isActive("/project")}>
                Portfolio
              </Nav.Link>
              <Nav.Link href="/resume" active={isActive("/resume")}>
                Resume
              </Nav.Link>
              <Nav.Link href="/contact" active={isActive("/contact")}>
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;


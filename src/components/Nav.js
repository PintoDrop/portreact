// import React from "react";
// import {NavLink} from "react-router-dom";
// // import "bootstrap/dist/css/bootstrap.min.css";

// function Nav(props) {
//   return (
//     // <nav class="navbar navbar-expand-lg navbar-light bg-light flex-row">
//     //   <div class="collapse navbar-collapse" id="navbarNav">
//     //     <div class="navbar-header">
//     //       <span class="navbar-toggler-icon"></span>
//     //     </div>
//     //     <ul class="navbar-nav mr-auto">
//     //       <li class="nav-item active">
//     //         <NavLink class="nav-link" to="/">
//     //           About Me
//     //         </NavLink>
//     //       </li>
          
//     //       <li class="nav-item">
//     //         <NavLink to="/project">Portfolio</NavLink>
//     //       </li>
//     //       <li class="nav-item">
//     //         <NavLink to="/contact">Contact</NavLink>
//     //       </li>
//     //       <li class="nav-item">
//     //         <NavLink to="/resume">Resume</NavLink>
//     //       </li>
//     //     </ul>
//     //   </div>
//     // </nav>

    
//   );
// }

// export default Nav;
import React from "react";

// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navigation(props) {
  return (
    <>
      <Navbar key="sm" bg="light" expand="sm" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Michael</Navbar.Brand>
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
              <Nav className="justify-content-end flex-grow-1 pe-3">
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
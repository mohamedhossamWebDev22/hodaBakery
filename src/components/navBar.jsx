import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

function NaviBar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary bg-dark text-center navbar-dark fixed-top"
    >
      <Container>
        <Navbar.Toggle
          className="text-light"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light m-1" as={Link} to="/contact">
              تواصل
            </Nav.Link>
            <Nav.Link className="text-light m-1" as={Link} to="/menu">
              المنيو
            </Nav.Link>
            <Nav.Link className="text-light m-1" as={Link} to="/">
              الرئيسية
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand
          className="text-warning font-title text-center fs-4 m-1 mx-auto"
          href="/"
        >
          حلواني الهدى
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NaviBar;

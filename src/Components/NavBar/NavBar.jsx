import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavScrollExample() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" id="titleNav">
          <img src={logo} alt="logo" className="logoNav" />
          Central House Import™
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
            id="nav-links"
          >
            <Nav.Link
              as={Link}
              to={"/"}
              href="#action1"
              style={{ color: "white" }}
            >
              Home
            </Nav.Link>

            <Nav.Link as={Link} to={"/category/stock"}>
              Stock
            </Nav.Link>

            <Nav.Link as={Link} to={"/category/vapes"}>
              OtrosVapes
            </Nav.Link>

            <Nav.Link as={Link} to={"/category/Celulares"}>
              Celulares
            </Nav.Link>
            <Nav.Link as={Link} to={"/category/Sobre Nosotros"}>
              Sobre Nosotros
            </Nav.Link>

            <Navbar.Brand>
              <CartWidget />
            </Navbar.Brand>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../Assets/logo.png";
import { Link, NavLink } from "react-router-dom";
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
            <NavLink to={"/"} href="#action1" style={{ color: "white" }}>
              Home
              <NavLink to={"/category/stock"}>
                <Nav.Link href="#action2">Stock</Nav.Link>
              </NavLink>
              <NavLink
                to={"/"}
                href="#action1"
                style={{ color: "white" }}
              ></NavLink>
              <NavLink to={"/category/stock"}>
                <NavDropdown title="Products" id="navbarScrollingDropdown">
                  <NavLink to={"/category/vapes"}>
                    <NavDropdown.Item href="#action3">
                      OtrosVapes
                    </NavDropdown.Item>
                  </NavLink>
                  <NavLink to={"/category/Celulares"}>
                    <NavDropdown.Item href="#action4">
                      Celulares
                    </NavDropdown.Item>
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink to={"/category/Sobre Nosotros"}>
                    <NavDropdown.Item href="#action5">
                      Sobre Nosotros
                    </NavDropdown.Item>
                  </NavLink>
                </NavDropdown>
              </NavLink>
            </NavLink>
            <Nav.Link href="#">Contact</Nav.Link>
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

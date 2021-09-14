import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar
      variant="dark"
      expand="md"
      className="background-opacity-dark rounded-0 py-3"
    >
      <Container>
        <Navbar.Brand href="/" id="logo-text" className="logo-text display-3">
          Bioscope
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="ms-auto text-light">
            <Nav.Link href="/movies/search">Search</Nav.Link>
            <Nav.Link href="/movies/top-rated">Top Rated</Nav.Link>
            <Nav.Link href="/movies/trending">Trending</Nav.Link>
            <Nav.Link href="/movies/now-playing">In Theaters Now</Nav.Link>
            <Nav.Link href="/genres/all">Movies by Genre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  /*  return (
      <Container className="navbar-container">
        <Row
          lg={2}
          className="justify-content-lg-between align-items-center py-2"
        >
          <Link to="/">
            <h3 className="logo-text display-3">Bioscope</h3>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <nav className="nav d-flex justify-content-between justify-content-lg-evenly fs-5">
          <Nav.Link href="/movies/top-rated">Top Rated</Nav.Link>
            <Nav.Link href="/movies/popular">Most Popular</Nav.Link>
            <Nav.Link href="/movies/now-playing">In Theaters Now</Nav.Link>
            <Nav.Link href="/movies/top-rated">Search</Nav.Link>
            <Nav.Link href="/genres/all">Browse by Genre</Nav.Link>
          </nav>
          </Navbar.Collapse>
        </Row>
        <hr></hr>
      </Container>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */
};

export default Navigation;

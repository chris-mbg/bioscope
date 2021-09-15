import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="background-opacity-dark rounded-0 py-3 mb-2 mb-lg-4"
    >
      <Container>
        <Navbar.Brand href="/" id="logo-text" className="logo-text display-3">
          Bioscope
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="ms-auto text-light fs-5">
            <Nav.Link href="/movies/search">Search</Nav.Link>
            <Nav.Link href="/movies/trending">Trending</Nav.Link>
            <Nav.Link href="/movies/top-rated">Top Rated</Nav.Link>
            <Nav.Link href="/movies/now-playing">In Theaters Now</Nav.Link>
            <Nav.Link href="/genres/all">Genres</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

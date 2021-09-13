import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Container className="navbar-container">
      <Row
        lg={2}
        className="justify-content-lg-between align-items-center py-2"
      >
        <Link to="/">
          <h3 className="logo-text display-3">Bioscope</h3>
        </Link>
        <nav className="nav d-flex justify-content-between justify-content-lg-evenly fs-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies/search">Search</NavLink>
          <NavLink to="/genres/all">Browse by Genre</NavLink>
        </nav>
      </Row>
      <hr></hr>
    </Container>
  );
};

export default Navigation;

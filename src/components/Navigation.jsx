import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Container>
      <Link to="/"><h3 className="logo-text">Bioscope</h3></Link>
      <div className="d-flex justify-content-evenly">
        <NavLink to="/movies/now-playing">Now Playing</NavLink>
        <NavLink to="/movies/popular">Most popular</NavLink>
        <NavLink to="/movies/top-rated">Top rated</NavLink>
        <NavLink to="/genres/all">Browse by Genre</NavLink>
      </div>
      <hr></hr>
    </Container>
  );
}

export default Navigation;
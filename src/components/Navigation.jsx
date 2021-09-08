import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Container>
      <h3 className="logo-text">Bioscope</h3>
      <NavLink to="/movies/now-playing">Now Playing</NavLink>
      <NavLink to="/movies/popular">Most popular</NavLink>
      <NavLink to="/movies/top-rated">Top rated</NavLink>
      <NavLink to="/genres/all">Browse by Genre</NavLink>
      <hr></hr>
    </Container>
  );
}

export default Navigation;
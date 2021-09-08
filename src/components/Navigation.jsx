import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      This is Navbar
      <h3>Bioscope</h3>
      <NavLink to="/movies/now-playing">Now Playing</NavLink>
      <NavLink to="/movies/popular">Most popular</NavLink>
      <NavLink to="/movies/top-rated">Top rated</NavLink>
      <NavLink to="/genres/all">Browse by Genre</NavLink>
      <hr></hr>
    </>
  );
}

export default Navigation;
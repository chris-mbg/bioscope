import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MovieCard from "./MovieCard";

const MoviesWrapper = ({ movies }) => {
  return (
    <Row xs={2} sm={3} lg={4} xl={5} className="g-3 mx-auto">
      {movies && movies.map((mov) => (
        <Col key={mov.id}>
          <MovieCard movie={mov} />
        </Col>
      ))}
    </Row>
  );
};

export default MoviesWrapper;

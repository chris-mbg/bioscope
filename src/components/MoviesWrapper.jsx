import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import imgPrefixUrl from '../utilities/ImgPrefixUrl'
import MovieCard from "./MovieCard";

const MoviesWrapper = ({ movies }) => {
  return (
    <Row xs={1} sm= {2} md={3} lg={4} xl={5} className="g-3 mx-auto">
      {movies && movies.map((mov) => (
        <Col key={mov.id}>
          <MovieCard movie={mov} />
        </Col>
      ))}
    </Row>
  );
};

export default MoviesWrapper;

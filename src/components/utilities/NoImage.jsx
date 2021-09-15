import React from 'react';
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

// Component to show when the image is missing from the retrieved data

const NoImage = ({ type, movie }) => {
  return type == 'actor' ? (
    <div className="d-flex justify-content-center align-items-center bg-secondary mx-auto rounded-3" style={{height: '180px', width: '70%'}}>
      <p className="fs-5 text-center">Image missing</p>
    </div>
  ) : (
    <>
    <div className="d-flex flex-column justify-content-around align-items-center bg-secondary mx-auto rounded-3" style={{height: '200px', width: '80%'}}>
      <p className="fs-6 text-center">{movie.title}</p>
      <p className="fs-6 text-center">Image missing</p>
    </div>
    <Card.Body>
          <Card.Title className="text-dark">{movie.title}</Card.Title>
        </Card.Body>
        </>
  );
}

export default NoImage;
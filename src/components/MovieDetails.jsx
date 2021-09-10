import React from "react";
import imgPrefixUrl from "../utilities/ImgPrefixUrl";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MovieDetails = ({ movie }) => {
  const renderContent = () => (
    <>
      <h1 className="text-center display-1">{movie.title}</h1>
        {movie.tagline && (
          <p className="text-center fs-5 mb-4">{movie.tagline}</p>
        )}
        <Row xs={1} lg={2} className="align-items-center mb-5">
          <Col className="mb-3 mb-lg-0" >
            <div className="d-flex justify-content-center align-items-center position-relative">
              <img
                src={imgPrefixUrl + movie.backdrop_path}
                alt={movie.title}
                className="img-fluid"
              />
            </div>
          </Col>
          <Col className="background-opacity-light rounded p-3 text-black">
            {/* <p>{movie.tagline}</p> */}
            <p>{movie.overview}</p>
            <Table borderless className="w-75 bg-transparent">
              <tbody>
                <tr>
                  <th>Score: </th>
                  <td>{Math.round(movie.vote_average)} / 10</td>
                </tr>
                <tr>
                  <th>Runtime</th>
                  <td>{movie.runtime} min</td>
                </tr>
                <tr>
                  <th>Release date</th>
                  <td>{movie.release_date}</td>
                </tr>
                <tr>
                  <th>Genres</th>
                  <td>
                    {movie.genres.map((g, i) => (
                      <span key={i}>{g.name}, </span>
                    ))}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </>
  );

  return movie ? renderContent() : null;
};

export default MovieDetails;

import React from "react";
import imgPrefixUrl from "../utilities/ImgPrefixUrl";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MovieDetailsInfo = ({ movie }) => {
  const withImg = () => (
    <Col className="mb-3 mb-lg-0">
      <div className="d-flex justify-content-center align-items-center position-relative">
        <img
          src={imgPrefixUrl + movie.backdrop_path}
          alt={movie.title}
          className="img-fluid rounded-3"
        />
      </div>
    </Col>
  );

  return (
    <>
      <h1 className="text-center display-1">{movie.title}</h1>
      {movie.tagline && (
        <p className="text-center fs-4 mb-4">{movie.tagline}</p>
      )}
      <Row
        xs={1}
        lg={movie.backdrop_path ? 2 : 1}
        className="align-items-center mb-5 background-opacity-dark p-3"
      >
        {movie.backdrop_path ? withImg() : null}
        <Col className="rounded-3 px-3 py-5">
          <p>{movie.overview}</p>
          <Table borderless className="w-75 bg-transparent text-light">
            <tbody>
              <tr>
                <th>Genres</th>
                <td>
                  {movie.genres.map((g, i) => (
                    <span key={i}>{g.name}, </span>
                  ))}
                </td>
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
                <th>Score: </th>
                <td>{Math.round(movie.vote_average)} / 10</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default MovieDetailsInfo;

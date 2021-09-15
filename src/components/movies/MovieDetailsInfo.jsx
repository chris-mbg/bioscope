import React from "react";
import imgPrefixUrl from "../../utilities/ImgPrefixUrl";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MovieDetailsInfo = ({ movie }) => {
  const withImg = () => (
    <Col className="mb-3 mb-lg-0 d-flex justify-content-center" lg={6}>
      <img
        src={imgPrefixUrl + movie.poster_path}
        alt={movie.title}
        className="rounded-3"
        style={{ maxHeight: "500px" }}
      />
    </Col>
  );

  return (
    <Row
      xs={1}
      lg={movie.poster_path ? 2 : 1}
      className="justify-content-center align-items-center mb-5 p-3 p-md-5"
    >
      {movie.poster_path && movie.backdrop_path ? withImg() : null}
      <Col>
        <h1 className="text-center display-3">{movie.title}</h1>
        {movie.tagline && (
          <p className="text-center fs-4 mb-4">{movie.tagline}</p>
        )}
        <Col className="rounded-3 px-3 py-5 bg-dark opacity-75">
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
              {movie.production_countries.length > 0 && (
                <tr>
                  <th>Production countries</th>
                  <td>
                    {movie.production_countries.map((c, i) => (
                      <span key={i}>{c.name}, </span>
                    ))}
                  </td>
                </tr>
              )}
              <tr>
                <th>Score: </th>
                <td>{Math.round(movie.vote_average)} / 10</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Col>
    </Row>
  );
};

export default MovieDetailsInfo;

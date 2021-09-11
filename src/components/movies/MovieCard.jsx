import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import imgPrefixUrl from "../../utilities/ImgPrefixUrl";
import NoImage from '../utilities/NoImage'

const MovieCard = ({ movie }) => {
  const renderCard = () => (
    <Card className="h-100 card-hover overflow-hidden">
      <Link to={`/movies/movie/${movie.id}`} className="h-100">
        {movie.poster_path ? (
          <Card.Img variant="top h-100" src={imgPrefixUrl + movie.poster_path} />
        ) : (
          <NoImage type="movie" movie={movie} />
        )}
        {/* <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <hr className="my-1" />
          <Table className="m-0 table-borderless fs-6">
            <tbody>
              <tr>
                <th>Release date</th>
                <td>{movie.release_date}</td>
              </tr>
              <tr>
                <th>Score</th>
                <td>{Math.round(movie.vote_average)}/10</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body> */}
      </Link>
    </Card>
  );

  return movie ? renderCard() : null;
};

export default MovieCard;

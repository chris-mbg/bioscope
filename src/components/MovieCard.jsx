import React from 'react'
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import imgPrefixUrl from '../utilities/ImgPrefixUrl'

const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100 bg-light shadow">
      <Link to={`/movies/movie/${movie.id}`}>
        <Card.Img variant="top" src={imgPrefixUrl + movie.backdrop_path} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <hr className="my-1"/>
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
        </Card.Body>
      </Link>
    </Card>
  );
}

export default MovieCard;
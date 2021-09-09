import React from "react";
import { Link } from "react-router-dom";
import MoviesWrapper from "../components/MoviesWrapper";
import ActorsWrapper from "./ActorsWrapper";
import Table from "react-bootstrap/Table";

const MovieDetailsInfo = ({ movie }) => {
  const renderContent = () => (
    <>
      <p>{movie.overview}</p>
      <Table>
        <tbody>
          <tr>
            <th>Runtime</th>
            <td>{movie.runtime}</td>
          </tr>
          <tr>
            <th>Release date</th>
            <td>{movie.release_date}</td>
          </tr>
          <tr>
            <th>Genres</th>
            <td>
              {movie.genres.map((g, i) => (
                <span key={i}>{g.name},</span>
              ))}
            </td>
          </tr>
        </tbody>
      </Table>

      <h3>Cast</h3>
      <ActorsWrapper
        actors={movie.credits?.cast
          ?.filter((member) => member.known_for_department === "Acting")
          .slice(0, 10)}
      />

      <h3>Similar movies</h3>
      <MoviesWrapper movies={movie.similar.results.slice(0, 5)} />
    </>
  );

  return movie ? renderContent() : null;
};

export default MovieDetailsInfo;

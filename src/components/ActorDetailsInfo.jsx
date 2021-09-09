import React from "react";
import { Link } from "react-router-dom";
import MoviesWrapper from "../components/MoviesWrapper";
import Table from "react-bootstrap/Table";

const ActorDetailsInfo = ({ actor }) => {
  const renderContent = () => (
    <>
      <p>{actor.biography}</p>
      <Table>
        <tbody>
          <tr>
            <th>Day of birth</th>
            <td>{actor.birthday}</td>
          </tr>
          <tr>
            <th>Place of birth</th>
            <td>{actor.place_of_birth}</td>
          </tr>
          {actor.deathday && (
            <tr>
              <th>Day of death</th>
              <td>{actor.release_date}</td>
            </tr>
          )}
        </tbody>
      </Table>

      <h3>Known for</h3>
      <MoviesWrapper movies={actor.movie_credits.cast.slice(0, 9)} />
    </>
  );

  return movie ? renderContent() : null;
};

export default ActorDetailsInfo;

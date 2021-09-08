import React from "react";
import { Link } from 'react-router-dom'
import MoviesWrapper from "../components/MoviesWrapper";
import ActorsWrapper from "./ActorsWrapper";

const MovieDetailsInfo = ({ movie }) => {

  const renderContent = () => (
    <>
      <p>{movie.overview}</p>
      <h3>Cast</h3>
      <ActorsWrapper actors={movie.credits?.cast?.filter(member => member.known_for_department === "Acting").slice(0, 10)} />

      {/* {movie.credits?.cast?.slice(0, 8).map((person) =>
        person.known_for_department === "Acting" ? (
          <p key={person.id}>
            <Link to={`/actors/actor/${person.id}`}>{person.name}</Link>
          </p>
        ) : (
          ""
        )
      )} */}

      <h3>Similar movies</h3>
      <MoviesWrapper movies={movie.similar.results.slice(0, 5)} />
    </>
  )

  return movie ? renderContent() : null
};

export default MovieDetailsInfo;

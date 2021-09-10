import React from "react";
import MoviesWrapper from "../components/MoviesWrapper";
import ActorsWrapper from "../components/ActorsWrapper";
import MovieDetailsInfo from "./MovieDetailsInfo";

const MovieDetails = ({ movie }) => {
  const renderContent = () => (
    <>
      <MovieDetailsInfo movie={movie} />

      <h2 className="display-6 text-center">Cast</h2>
      <ActorsWrapper
        actors={movie.credits?.cast
          ?.filter((member) => member.known_for_department === "Acting")
          .slice(0, 10)}
      />

      <h2 className="display-5 text-center">Similar movies</h2>
      <MoviesWrapper movies={movie.similar.results.slice(0, 5)} />
    </>
  );

  return movie ? renderContent() : null;
};

export default MovieDetails;

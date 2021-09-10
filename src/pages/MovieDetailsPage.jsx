import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/TMDBAPI";
import LoadError from "../components/LoadError";
import MovieDetails from "../components/MovieDetails";
import MoviesWrapper from "../components/MoviesWrapper";
import ActorsWrapper from "../components/ActorsWrapper";

const MovieDetailsPage = () => {
  const { id: movieId } = useParams();

  const { data, error, isError, isLoading } = useQuery(
    ["movie-details", movieId],
    () => getMovieById(movieId)
  );

  return (
    <>
      <LoadError isLoading={isLoading} isError={isError} error={error} />

      {data && (
        <>
          <MovieDetails movie={data} />

          <h2 className="display-6 text-center">Cast</h2>
          <ActorsWrapper
            actors={data.credits?.cast
              ?.filter((member) => member.known_for_department === "Acting")
              .slice(0, 10)}
          />

          <h3 className="display-5 text-center">Similar movies</h3>
          <MoviesWrapper movies={data.similar.results.slice(0, 5)} />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;

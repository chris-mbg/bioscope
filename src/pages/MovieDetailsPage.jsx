import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/TMDBAPI";
import LoadError from "../components/utilities/LoadError";
import MovieDetails from "../components/movies/MovieDetails";


const MovieDetailsPage = () => {
  const { id: movieId } = useParams();

  const { data, error, isError, isLoading } = useQuery(
    ["movie-details", movieId],
    () => getMovieById(movieId)
  );

  return (
    <>
      <LoadError isLoading={isLoading} isError={isError} error={error} />

      {data && <MovieDetails movie={data} />}
    </>
  );
};

export default MovieDetailsPage;

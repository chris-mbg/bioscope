import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/TMDBAPI";
import LoadError from "../components/LoadError";
import MovieDetailsHeader from "../components/MovieDetailsHeader";
import MovieDetailsInfo from "../components/MovieDetailsInfo";

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
          <MovieDetailsHeader
            title={data.title}
            img={data.backdrop_path}
            tagline={data.tagline}
            score={data.vote_average}
          />
          <MovieDetailsInfo movie={data} />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;

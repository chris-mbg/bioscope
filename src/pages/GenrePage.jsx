import React from "react";
import { useQuery } from "react-query";
import { getMoviesForGenre } from "../services/TMDBAPI";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const GenrePage = () => {
  const { id: genreId } = useParams();

  const { data, isLoading, isError, error } = useQuery(
    ["genre-movies", genreId],
    () => getMoviesForGenre(genreId)
  );

  return (
    <>
      <h1>Movies in genre</h1>
      {isError && <p>Error: {error.message}</p>}
      {isLoading && <p>Loading...</p>}
      {data &&
        data.results.map((mov) => (
          <p key={mov.id}>
            <Link to={`/movies/movie/${mov.id}`}>{mov.title}</Link>
          </p>
        ))}
    </>
  );
};

export default GenrePage;

import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getAllGenres } from "../services/TMDBAPI";

const GenreListPage = () => {
  const { data, isError, error, isLoading } = useQuery(
    ["all-genres"],
    getAllGenres
  );

  return (
    <>
      <h1>Browse by Genres</h1>
      {isError && <p>Error: {error.message}</p>}
      {isLoading && <p>Loading...</p>}
      {data &&
        data.genres.map((genre) => (
          <p key={genre.id}>
            <Link to={`/genres/genre/${genre.id}`}>{genre.name}</Link>

          </p>
        ))}
    </>
  );
};

export default GenreListPage;

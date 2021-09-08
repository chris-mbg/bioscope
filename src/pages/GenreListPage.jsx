import React from "react";
import { useQuery } from "react-query";
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
      {data && data.genres.map(genre => <p key={genre.id}>{genre.name}</p>)}
    </>
  );
};

export default GenreListPage;

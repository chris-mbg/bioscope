import React from 'react';
import { useQuery } from 'react-query'
import { getTopRated } from '../services/TMDBAPI'
import LoadError from "../components/utilities/LoadError";
import MoviesWrapper from "../components/movies/MoviesWrapper";

const TopRatedPage = () => {
  const { data, isError, error, isLoading } = useQuery(
    ["top-rated-us"],
    getTopRated
  );

  return (
    <div>
      <h1 className="my-4">Top Rated Movies</h1>
      <LoadError isLoading={isLoading} isError={isError} error={error} />
      {data && <MoviesWrapper movies={data.results} />}
    </div>
  );
}

export default TopRatedPage;
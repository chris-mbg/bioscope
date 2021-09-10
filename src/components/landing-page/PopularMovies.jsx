import React from 'react';
import { useQuery } from 'react-query'
import { getPopular } from '../../services/TMDBAPI'
import MoviesWrapper from '../movies/MoviesWrapper';
import LoadError from "../utilities/LoadError";

const PopularMovies = () => {

  const { data, isError, error, isLoading } = useQuery(['popular-us'], getPopular)

  return (
    <div>
      <h1>Most Popular Movies</h1>
      <LoadError isLoading={isLoading} isError={isError} error={error} />
      {data && <MoviesWrapper movies={data.results} />}
    </div>
  );
}

export default PopularMovies;
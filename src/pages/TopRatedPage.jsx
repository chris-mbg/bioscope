import React from 'react';
import { useQuery } from 'react-query'
import { getTopRated } from '../services/TMDBAPI'
import LoadError from "../components/LoadError";

const TopRatedPage = () => {

  const { data, isError, error, isLoading } = useQuery(['top-rated-us'], getTopRated)

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <LoadError isLoading={isLoading} isError={isError} error={error} />
      {data && data.results.map(mov => (<p key={mov.id}>{mov.title}</p>))}
    </div>
  );
}

export default TopRatedPage;
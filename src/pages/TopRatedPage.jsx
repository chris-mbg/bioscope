import React from 'react';
import { useQuery } from 'react-query'
import { getTopRated } from '../services/TMDBAPI'

const TopRatedPage = () => {

  const { data, isError, error, isLoading } = useQuery(['top-rated-us'], getTopRated)

  return (
    <div>
      <h1>Top Rated Movies</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      {data && data.results.map(mov => (<p key={mov.id}>{mov.title}</p>))}
    </div>
  );
}

export default TopRatedPage;
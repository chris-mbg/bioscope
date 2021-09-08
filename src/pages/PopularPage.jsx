import React from 'react';
import { useQuery } from 'react-query'
import { getPopular } from '../services/TMDBAPI'

const PopularPage = () => {

  const { data, isError, isLoading } = useQuery(['popular-us'], getPopular)

  return (
    <div>
      <h1>Most Popular Movies</h1>
      {isError && <p>Error occured</p>}
      {isLoading && <p>Loading...</p>}
      {data && data.results.map(mov => (<p key={mov.id}>{mov.title}</p>))}
    </div>
  );
}

export default PopularPage;
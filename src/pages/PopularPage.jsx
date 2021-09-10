import React from 'react';
import { useQuery } from 'react-query'
import { getPopular } from '../services/TMDBAPI'
import LoadError from "../components/LoadError";

const PopularPage = () => {

  const { data, isError, error, isLoading } = useQuery(['popular-us'], getPopular)

  return (
    <div>
      <h1>Most Popular Movies</h1>
      <LoadError isLoading={isLoading} isError={isError} error={error} />
      {data && data.results.map(mov => (<p key={mov.id}>{mov.title}</p>))}
    </div>
  );
}

export default PopularPage;
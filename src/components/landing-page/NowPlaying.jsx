import React from 'react';
import { useQuery } from 'react-query'
import { getNowPlaying } from '../../services/TMDBAPI'
import LoadError from "../utilities/LoadError";
import MoviesWrapper from '../movies/MoviesWrapper';

const NowPlaying = () => {

  const { data, isError, error, isLoading } = useQuery(['now-playing-us'], getNowPlaying)

  return (
    <div>
      <h1>Now Playing</h1>
      <LoadError isLoading={isLoading} isError={isError} error={error} />
      {data && <MoviesWrapper movies={data.results} />}
    </div>
  );
}

export default NowPlaying;
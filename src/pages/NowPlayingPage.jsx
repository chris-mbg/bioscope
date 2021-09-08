import React from 'react';
import { useQuery } from 'react-query'
import { getNowPlaying } from '../services/TMDBAPI'
import LoadError from "../components/LoadError";

const NowPlayingPage = () => {

  const { data, isError, isLoading } = useQuery(['now-playing-us'], getNowPlaying)

  return (
    <div>
      <h1>Now Playing</h1>
      <LoadError isLoading={isLoading} isError={isError} error={error} />
      {data && data.results.map(mov => (<p key={mov.id}>{mov.title}</p>))}
    </div>
  );
}

export default NowPlayingPage;
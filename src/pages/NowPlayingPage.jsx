import React from 'react';
import { useQuery } from 'react-query'
import { getNowPlaying, getPopular, testGet } from '../services/TMDBAPI'

const NowPlayingPage = () => {

  const { data, isError, isLoading } = useQuery(['now-playing-us'], getNowPlaying)

  return (
    <div>
      <h1>Now Playing</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      {data && data.results.map(mov => (<p key={mov.id}>{mov.title}</p>))}
    </div>
  );
}

export default NowPlayingPage;
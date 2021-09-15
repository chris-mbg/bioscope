import React from "react";
import { useQuery } from "react-query";
import { getNowPlaying } from "../services/TMDBAPI";
import LoadError from "../components/utilities/LoadError";
import MoviesWrapper from "../components/movies/MoviesWrapper";

const NowPlayingPage = () => {
  const { data, isError, error, isLoading } = useQuery(
    ["now-playing-us"],
    getNowPlaying
  );

  return (
    <div>
      <h1 className="my-4">In Theaters now</h1>
      <LoadError isLoading={isLoading} isError={isError} error={error} />
      {data && <MoviesWrapper movies={data.results} />}
    </div>
  );
};

export default NowPlayingPage;
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/TMDBAPI";
import LoadError from "../components/utilities/LoadError";
import MovieDetails from "../components/movies/MovieDetails";
import { useViewedContext } from "../contexts/ViewedContextProvider";


const MovieDetailsPage = () => {
  const { id: movieId } = useParams();

  const { addMovieToList } = useViewedContext();

  const { data, error, isError, isLoading } = useQuery(
    ["movie-details", movieId],
    () => getMovieById(movieId)
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [movieId]);

  // Adds movie to the list of recently viewed movied, showed in the Footer comp.
  useEffect(() => {
    if (!data || error) { return }
    if(data)
    addMovieToList({
      id: movieId,
      title: data.title,
      poster_path: data.poster_path
    })
  },[data])

  return (
    <>
      <LoadError isLoading={isLoading} isError={isError} error={error} />

      {data && <MovieDetails movie={data} />}
    </>
  );
};

export default MovieDetailsPage;

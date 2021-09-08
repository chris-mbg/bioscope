import React from 'react';
import { useQuery } from 'react-query';
import { useParams, Link } from 'react-router-dom';
import { getMovieById } from '../services/TMDBAPI';

const MovieDetailsPage = () => {

  const { id: movieId } = useParams();

  const { data, error, isError, isLoading } = useQuery(['movie-details', movieId], () => getMovieById(movieId));

  return (
    <>
      <h1>Movie Details</h1>
      {data && <h2>{data.title}</h2>}
      {data && data.credits?.cast?.map(person => person.known_for_department === "Acting" ? <p><Link to={`/actors/actor/${person.id}`}>{person.name}</Link></p> : '')}

    </>
  );
}

export default MovieDetailsPage;
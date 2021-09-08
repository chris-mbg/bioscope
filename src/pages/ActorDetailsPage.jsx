import React from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import { getActorById } from "../services/TMDBAPI";

const ActorDetailsPage = () => {
  const { id: actorId } = useParams();

  const { data, isLoading, isError, error } = useQuery(
    ["actor-details", actorId],
    () => getActorById(actorId)
  );

  return (
    <>
      <h1>Actor Details</h1>
      {data && <h2>{data.name}</h2>}
      {data && (
        <div>
          <ul>
            {data.movie_credits.cast.slice(0,9).map(mov => (<li key={mov.id}><Link to={`/movies/movie/${mov.id}`}>{mov.title}</Link></li>))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ActorDetailsPage;

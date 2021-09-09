import React from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import { getActorById } from "../services/TMDBAPI";
import LoadError from "../components/LoadError";
import ActorDetailsHeader from "../components/ActorDetailsHeader";
import ActorDetailsInfo from "../components/ActorDetailsInfo";

const ActorDetailsPage = () => {
  const { id: actorId } = useParams();

  const { data, isLoading, isError, error } = useQuery(
    ["actor-details", actorId],
    () => getActorById(actorId)
  );

  return (
    <>
      <LoadError isLoading={isLoading} isError={isError} error={error} />
      {data && (
        <>
          <ActorDetailsHeader
            name={data.name}
            img={data.profile_path}
            //tagline={data.tagline}
            //score={data.vote_average}
          />
          <ActorDetailsInfo actor={data} />
        </>
      )}
      {data && (
        <div>
          <ul>
            
          </ul>
        </div>
      )}
    </>
  );
};

export default ActorDetailsPage;

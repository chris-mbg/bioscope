import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getActorById } from "../services/TMDBAPI";
import LoadError from "../components/LoadError";
import ActorDetails from "../components/ActorDetails";
import MoviesWrapper from "../components/MoviesWrapper";

const ActorDetailsPage = () => {
  const { id: actorId } = useParams();

  const { data, isLoading, isError, error } = useQuery(
    ["actor-details", actorId],
    () => getActorById(actorId)
  );

  return (
    <>
      <LoadError isLoading={isLoading} isError={isError} error={error} />

      {data && <ActorDetails actor={data} />}

    </>
  );
};

export default ActorDetailsPage;

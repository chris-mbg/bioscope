import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getActorById } from "../services/TMDBAPI";
import LoadError from "../components/utilities/LoadError";
import ActorDetails from "../components/actors/ActorDetails";
import MoviesWrapper from "../components/movies/MoviesWrapper";

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

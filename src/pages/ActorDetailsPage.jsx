import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getActorById } from "../services/TMDBAPI";
import LoadError from "../components/utilities/LoadError";
import ActorDetails from "../components/actors/ActorDetails";

const ActorDetailsPage = () => {
  const { id: actorId } = useParams();

  const { data, isLoading, isError, error } = useQuery(
    ["actor-details", actorId],
    () => getActorById(actorId)
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [actorId]);

  return (
    <>
      <LoadError isLoading={isLoading} isError={isError} error={error} />

      {data && <ActorDetails actor={data} />}
    </>
  );
};

export default ActorDetailsPage;

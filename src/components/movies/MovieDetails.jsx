import React, { useState } from "react";
import MoviesWrapper from "./MoviesWrapper";
import ActorsWrapper from "../actors/ActorsWrapper";
import MovieDetailsInfo from "./MovieDetailsInfo";
import Button from 'react-bootstrap/Button'

const MovieDetails = ({ movie }) => {
  // Variable to make it possible for the user to see full cast of actors. As default 10 cast members are presented.
  const [seeAll, setSeeAll] = useState(false);

  // Filtering out the cast known for acting.
  const actingCast = movie.credits.cast.filter(
    (member) => member.known_for_department === "Acting"
  )

  const renderContent = () => (
    <>
      <MovieDetailsInfo movie={movie} />

      <h2 className="display-6 text-center">Cast</h2>
      <ActorsWrapper
        actors={
          seeAll
            ? actingCast
            : actingCast.slice(0, 10)
        }
      />
      {actingCast.length > 10 && (
        <div className="text-end mt-2">
          <Button
            variant="light"
            onClick={() => setSeeAll((prevState) => !prevState)}
          >
            {seeAll ? "See selection" : "See full cast"}
          </Button>
        </div>
      )}
      
      <h2 className="display-5 text-center">Similar movies</h2>
      <MoviesWrapper movies={movie.similar.results.slice(0, 5)} />
    </>
  );

  return movie ? renderContent() : null;
};

export default MovieDetails;

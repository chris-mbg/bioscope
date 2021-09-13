import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import imgPrefixUrl from "../../utilities/ImgPrefixUrl";
import NoImage from '../utilities/NoImage'

const MovieCard = ({ movie }) => {
  const renderCard = () => (
    <Card className="h-100 card-hover overflow-hidden">
      <Link to={`/movies/movie/${movie.id}`} className="h-100">
        {movie.poster_path ? (
          <Card.Img variant="top h-100" src={imgPrefixUrl + movie.poster_path} className="img-fluid"/>
        ) : (
          <NoImage type="movie" movie={movie} />
        )}
      </Link>
    </Card>
  );

  return movie ? renderCard() : null;
};

export default MovieCard;

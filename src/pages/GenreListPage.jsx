import React from "react";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getAllGenres } from "../services/TMDBAPI";
import LoadError from "../components/LoadError";

const GenreListPage = () => {
  const { data, isError, error, isLoading } = useQuery(
    ["all-genres"],
    getAllGenres,
    {
      cacheTime: 1000 * 60 * 30
    }
  );

  return (
    <Container className="">
      <h1>Browse by Genres</h1>
      <LoadError isLoading={isLoading} isError={isError} error={error} />
      {data &&
        data.genres.map((genre) => (
          <Link to={`/genres/genre/${genre.id}`} key={genre.id}>
            <div className="fs-5">
              {genre.name}
            </div>
          </Link>
        ))}
    </Container>
  );
};

export default GenreListPage;

import React from "react";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getAllGenres } from "../services/TMDBAPI";
import LoadError from "../components/utilities/LoadError";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const GenreListPage = () => {
  const { data, isError, error, isLoading } = useQuery(
    ["all-genres"],
    getAllGenres,
    {
      staleTime: 1000 * 60 * 60,        //1h
      cacheTime: 1000 * 60 * 60 * 24, // 24h
    }
  );

  return (
    <Container className="mt-4">
      <h1 className="my-4">Genres</h1>
      <LoadError isLoading={isLoading} isError={isError} error={error} />
      {data && (
        <Row
          xs={2}
          sm={3}
          md={4}
          lg={5}
          className="mx-auto"
          id="genre-names-links"
        >
          {data.genres.map((genre) => (
            <Col key={genre.id}>
              <Link
                to={{
                  pathname: `/genres/genre/${genre.id}`,
                  state: { genreName: genre.name },
                }}
              >
                <div className="background-opacity-dark fs-5 text-center py-1 py-md-3 my-1">
                  {genre.name}
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default GenreListPage;

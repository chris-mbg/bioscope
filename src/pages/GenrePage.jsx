import React from "react";
import { useQuery } from "react-query";
import { getMoviesForGenre } from "../services/TMDBAPI";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import {
  useQueryParam,
  NumberParam,
  withDefault,
} from "use-query-params";
import Pagination from "../components/utilities/Pagination";
import MoviesWrapper from "../components/movies/MoviesWrapper";
import LoadError from "../components/utilities/LoadError";

const GenrePage = () => {
  const { id: genreId } = useParams();

  // From the GenreListPage the name of the genre is sent via the Link as state on the location object. The state is then used in the JSX to write out what genre the movies belongs to.
  const location = useLocation();

  const [page, setPage] = useQueryParam('page', withDefault(NumberParam, 1));

  const { data, isLoading, isError, error, isPreviousData } = useQuery(
    ["genre-movies", genreId, page],
    () => getMoviesForGenre(genreId, page),
    { keepPreviousData: true }
  );

  return (
    <>
      <h1 className="my-4">
        {/* If a hard reload is made on the genre page, the genre name will no longer be specified due to that state on the location object is undefined */}
        Find {location.state?.genreName ?? ""} Movies
      </h1>

      <LoadError isLoading={isLoading} isError={isError} error={error} />

      <MoviesWrapper movies={data?.results} />

      <Pagination
        page={page}
        setPage={setPage}
        isPrevData={isPreviousData}
        hasMore={data?.total_pages > page}
      />
    </>
  );
};

export default GenrePage;

import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getMoviesForGenre } from "../services/TMDBAPI";
import { useParams } from "react-router";
import { Link, useLocation } from "react-router-dom";
import Pagination from "../components/utilities/Pagination";
import { useUrlSearchParams } from "use-url-search-params";
import MoviesWrapper from "../components/movies/MoviesWrapper";
import LoadError from "../components/utilities/LoadError";

const GenrePage = () => {
  const { id: genreId } = useParams();

  // From the GenreListPage the name of the genre is sent via the Link as state on the location object. The state is then used in the JSX to write out what genre the movies belongs to.
  const location = useLocation();
  const queryClient = useQueryClient();
  const [page, setPage] = useUrlSearchParams({ page: 1 }, { page: Number });

  console.log(location);

  const { data, isLoading, isError, error, isPreviosData } = useQuery(
    ["genre-movies", genreId, page],
    () => getMoviesForGenre(genreId, page.page),
    { keepPreviousData: true }
  );

  return (
    <>
      <h1 className="text-center">
        {/* If a hard reload is made on the genre page, the genre name will no longer be specified due to that state on the location object is undefined */}
        Find {location.state?.genreName ?? ""} Movies
      </h1>

      <LoadError isLoading={isLoading} isError={isError} error={error} />

      <MoviesWrapper movies={data?.results} />

      <Pagination
        page={page.page}
        setPage={setPage}
        isPrevData={isPreviosData}
        hasMore={data?.total_pages > page.page}
      />
    </>
  );
};

export default GenrePage;

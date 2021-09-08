import React from "react";
import { useQuery } from "react-query";
import { getMoviesForGenre } from "../services/TMDBAPI";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { useUrlSearchParams } from "use-url-search-params";

const GenrePage = () => {
  const { id: genreId } = useParams();

  const [page, setPage] = useUrlSearchParams({ page: 1 }, { page: Number });

  const { data, isLoading, isError, error, isPreviosData } = useQuery(
    ["genre-movies", genreId, page],
    () => getMoviesForGenre(genreId, page.page),
    { keepPreviousData: true }
  );

  return (
    <>
      <h1>Movies in genre</h1>
      {isError && <p>Error: {error.message}</p>}
      {isLoading && <p>Loading...</p>}
      {data &&
        data.results.map((mov) => (
          <p key={mov.id}>
            <Link to={`/movies/movie/${mov.id}`}>{mov.title}</Link>
          </p>
        ))}
      <Pagination
        page={page.page}
        setPage={setPage}
        isPrevData={isPreviosData}
        hasMore={data?.total_pages > page.page}/>
    </>
  );
};

export default GenrePage;

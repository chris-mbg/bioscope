import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getMoviesForGenre } from "../services/TMDBAPI";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { useUrlSearchParams } from "use-url-search-params";

const GenrePage = () => {
  const { id: genreId } = useParams();
  const queryClient = useQueryClient();
  const [page, setPage] = useUrlSearchParams({ page: 1 }, { page: Number });

  const [genreName, setGenreName] = useState('');
  const genreArr = queryClient.getQueryData(["all-genres"]);

  useEffect(() => {
    const item = genreArr?.genres.filter(gen => gen.id == genreId)
    if(item) {
      setGenreName(item[0].name)
    }
  }, [])

  const { data, isLoading, isError, error, isPreviosData } = useQuery(
    ["genre-movies", genreId, page],
    () => getMoviesForGenre(genreId, page.page),
    { keepPreviousData: true }
  );

  return (
    <>
      <h1 className="text-center">Find {genreName} Movies</h1>
      {isError && <p>Error: {error.message}</p>}
      {isLoading && <p>Loading...</p>}
      {data && (
        <>
          {data.results.map((mov) => (
            <p key={mov.id}>
              <Link to={`/movies/movie/${mov.id}`}>{mov.title}</Link>
            </p>
          ))}
        </>
      )}

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

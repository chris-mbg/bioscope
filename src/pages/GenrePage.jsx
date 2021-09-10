import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getMoviesForGenre } from "../services/TMDBAPI";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Pagination from "../components/utilities/Pagination";
import { useUrlSearchParams } from "use-url-search-params";
import MoviesWrapper from "../components/movies/MoviesWrapper";
import LoadError from "../components/utilities/LoadError";


const GenrePage = () => {
  const { id: genreId } = useParams();
  const queryClient = useQueryClient();
  const [page, setPage] = useUrlSearchParams({ page: 1 }, { page: Number });

  // Trying to ge genre name from cached data... Do not work on hard reload, and destroys the ability to go back in the browser?!?
  // const [genreName, setGenreName] = useState('');
  // const genreArr = queryClient.getQueryData(["all-genres"]);

  // useEffect(() => {
  //   const item = genreArr?.genres.filter(gen => gen.id == genreId)
  //   if(item) {
  //     setGenreName(item[0].name)
  //   }
  // }, [])

  const { data, isLoading, isError, error, isPreviosData } = useQuery(
    ["genre-movies", genreId, page],
    () => getMoviesForGenre(genreId, page.page),
    { keepPreviousData: true }
  );

  return (
    <>
      <h1 className="text-center">Find ... Movies</h1>

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

import React, { useEffect } from 'react';
import { useQuery } from 'react-query'
import { getTopRated } from '../services/TMDBAPI'
import LoadError from "../components/utilities/LoadError";
import MoviesWrapper from "../components/movies/MoviesWrapper";
import { useQueryParam, NumberParam, withDefault, } from 'use-query-params';
import Pagination from "../components/utilities/Pagination";

const TopRatedPage = () => {

  const [page, setPage] = useQueryParam("page", withDefault(NumberParam, 1));

  const { data, isError, error, isLoading, isPreviousData } = useQuery(
    ["top-rated-us", page],
    () => getTopRated(page),
    { keepPreviousData: true }
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [page]);

  return (
    <div>
      <h1 className="my-4">Top Rated Movies</h1>
      <LoadError isLoading={isLoading} isError={isError} error={error} />
      {data && <MoviesWrapper movies={data.results} />}

      <Pagination
        page={page.page}
        setPage={setPage}
        isPrevData={isPreviousData}
        hasMore={data?.total_pages > page.page}
      />
    </div>
  );
}

export default TopRatedPage;
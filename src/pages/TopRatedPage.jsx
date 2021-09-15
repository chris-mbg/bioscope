import React, { useEffect } from 'react';
import { useQuery } from 'react-query'
import { getTopRated } from '../services/TMDBAPI'
import LoadError from "../components/utilities/LoadError";
import MoviesWrapper from "../components/movies/MoviesWrapper";
import { useUrlSearchParams } from "use-url-search-params";
import Pagination from "../components/utilities/Pagination";

const TopRatedPage = () => {

  const [page, setPage] = useUrlSearchParams({ page: 1 }, { page: Number });

  const { data, isError, error, isLoading, isPreviousData } = useQuery(
    ["top-rated-us", page],
    () => getTopRated(page.page),
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
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useUrlSearchParams } from "use-url-search-params";
import MoviesWrapper from "../components/movies/MoviesWrapper";
import SearchForm from "../components/search/SearchForm";
import LoadError from "../components/utilities/LoadError";
import { getMoviesBySearch } from "../services/TMDBAPI";
import Pagination from "../components/utilities/Pagination";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useUrlSearchParams(
    { page: 1, query: "" },
    { page: Number }
  );

  const [page, setPage] = useState({ page: searchParams.page });
  const [searchStr, setSearchStr] = useState(searchParams.query);

  const { data, error, isError, isLoading, isPreviousData } = useQuery(
    ["search", searchParams],
    () => getMoviesBySearch(searchParams),
    {
      keepPreviousData: true,
    }
  );

  const handleSearchFormSubmit = (searchInput) => {
    console.log("Notified in parent component", searchInput);
    setSearchStr(searchInput);
  };

  useEffect(() => {
    setSearchParams({ ...searchParams, page: page.page, query: searchStr });
  }, [page, searchStr]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [page]);

  return (
    <>
      <h1>Search Page</h1>
      <SearchForm onFormSubmit={handleSearchFormSubmit} />
      <LoadError isLoading={isLoading} isError={isError} error={error} />
      {data && data.results.length === 0 && (
        <p className="mt-4 text-center fs-4">
          Sorry, found nothing that matched:{" "}
          <span className="fs-3">{searchStr}</span>
        </p>
      )}
      {data && data.results.length > 0 && (
        <div className="mt-3">
          <h2 className="mb-4">
            Results for:
            <span className="display-6"> {searchStr}</span>
          </h2>
          <MoviesWrapper movies={data.results} />
          <Pagination
            page={page.page}
            setPage={setPage}
            isPrevData={isPreviousData}
            hasMore={data?.total_pages > page.page}
          />
        </div>
      )}
    </>
  );
};

export default SearchPage;

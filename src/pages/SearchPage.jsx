import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  useQueryParam,
  NumberParam,
  withDefault,
  StringParam,
} from "use-query-params";
import MoviesWrapper from "../components/movies/MoviesWrapper";
import SearchForm from "../components/search/SearchForm";
import LoadError from "../components/utilities/LoadError";
import { getMoviesBySearch } from "../services/TMDBAPI";
import Pagination from "../components/utilities/Pagination";

const SearchPage = () => {
  const [page, setPage] = useQueryParam("page", withDefault(NumberParam, 1));
  const [query, setQuery] = useQueryParam(
    "query",
    withDefault(StringParam, "")
  );

  const { data, error, isError, isLoading, isPreviousData } = useQuery(
    ["search", query, page],
    () => getMoviesBySearch({ query, page }),
    {
      keepPreviousData: true,
    }
  );

  const handleSearchFormSubmit = (searchInput) => {
    setQuery(searchInput)
    //Reseting page if new search is submitted
    setPage(1);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [page]);

  return (
    <div className="my-5 mt-lg-4">
      <h1>Search for Movies</h1>

      <SearchForm
        onFormSubmit={handleSearchFormSubmit}
        initSearchInput={query}
      />

      <LoadError isLoading={isLoading} isError={isError} error={error} />

      {data && data.results.length === 0 && (
        <p className="mt-4 text-center fs-4">
          Sorry, found nothing that matched:{" "}
          <span className="fs-3">{query}</span>
        </p>
      )}

      {data && data.results.length > 0 && (
        <div className="mt-3">
          <h2 className="mb-4">
            Results for:
            <span className="display-6"> {query}</span>
          </h2>

          <MoviesWrapper movies={data.results} />

          <Pagination
            page={page}
            setPage={setPage}
            isPrevData={isPreviousData}
            hasMore={data?.total_pages > page}
          />
        </div>
      )}
    </div>
  );
};

export default SearchPage;

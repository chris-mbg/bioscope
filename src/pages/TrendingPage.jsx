import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useUrlSearchParams } from "use-url-search-params";
import { getTrending } from "../services/TMDBAPI";
import LoadError from "../components/utilities/LoadError";
import MoviesWrapper from "../components/movies/MoviesWrapper";
import Pagination from "../components/utilities/Pagination";

const TrendingPage = () => {
  // Query depends on both time window and page.
  const [searchParams, setSearchParams] = useUrlSearchParams(
    { timeWindow: "week", page: 1 },
    { timeWindow: ["week", "day"], page: Number }
  );

  const [page, setPage] = useState({ page: 1 });

  const { data, isError, error, isLoading, isPreviousData } = useQuery(
    ["trending-us", searchParams.timeWindow, searchParams.page],
    () => getTrending(searchParams.timeWindow, searchParams.page),
    { keepPreviousData: true }
  );

  const handleRadioChange = (e) => {
    // fired when user changes the time window for Trending. If time window is changed the page is 'reset' to 1.
    setSearchParams({timeWindow: e.target.value, page: 1 })
  };

  useEffect(() => {
    setSearchParams({
      ...searchParams,
      page: page.page,
    });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [page]);

  return (
    <div>
      <h1 className="my-4">
        Trending {searchParams.timeWindow === "week" ? "this Week" : "Today"}
      </h1>

      <div className="mb-4 fs-5 d-flex justify-content-end align-items-center">
        <span className="me-4">Trending:</span>
        <div className="d-flex flex-column">
          <span>
            <input
              onChange={handleRadioChange}
              type="radio"
              name="time-window"
              value="day"
              checked={searchParams.timeWindow === "day"}
            />
            <label className="ms-2">today</label>
          </span>
          <span className="me-4">
            <input
              onChange={handleRadioChange}
              type="radio"
              name="time-window"
              value="week"
              checked={searchParams.timeWindow === "week"}
            />
            <label className="ms-2">this week</label>
          </span>
        </div>
      </div>

      <LoadError isLoading={isLoading} isError={isError} error={error} />
      {data && (
        <>
          <MoviesWrapper movies={data.results} />
          <Pagination
            page={page.page}
            setPage={setPage}
            isPrevData={isPreviousData}
            hasMore={data?.total_pages > page.page}
          />
        </>
      )}
    </div>
  );
};

export default TrendingPage;

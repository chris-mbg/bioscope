import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { getTrending } from "../services/TMDBAPI";
import LoadError from "../components/utilities/LoadError";
import MoviesWrapper from "../components/movies/MoviesWrapper";
import Pagination from "../components/utilities/Pagination";
import {
  useQueryParam,
  NumberParam,
  withDefault,
  StringParam,
} from "use-query-params";

const TrendingPage = () => {

  const [page, setPage] = useQueryParam("page", withDefault(NumberParam, 1));
  const [timeWindow, setTimeWindow] = useQueryParam(
    "timeWindow",
    withDefault(StringParam, "week")
  );

  // Query depends on both the time window and page number.
  const { data, isError, error, isLoading, isPreviousData } = useQuery(
    ["trending-us", timeWindow, page],
    () => getTrending(timeWindow, page),
    { keepPreviousData: true }
  );

  const handleRadioChange = (e) => {
    // Fired when user changes the time window for Trending.
    // If time window is changed the page is 'reset' to 1.
    setTimeWindow(e.target.value);
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
    <div>
      <h1 className="my-4">
        Trending {timeWindow === "week" ? "this Week" : "Today"}
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
              checked={timeWindow === "day"}
            />
            <label className="ms-2">today</label>
          </span>
          <span className="me-4">
            <input
              onChange={handleRadioChange}
              type="radio"
              name="time-window"
              value="week"
              checked={timeWindow === "week"}
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
            page={page}
            setPage={setPage}
            isPrevData={isPreviousData}
            hasMore={data?.total_pages > page}
          />
        </>
      )}
    </div>
  );
};

export default TrendingPage;

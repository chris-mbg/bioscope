import React, { useState } from "react";
import { useQuery } from "react-query";
import { getTrending } from "../services/TMDBAPI";
import LoadError from "../components/utilities/LoadError";
import MoviesWrapper from "../components/movies/MoviesWrapper";
import { useUrlSearchParams } from "use-url-search-params";
import Form from "react-bootstrap/Form";

const TrendingPage = () => {
  // Variable to make it possible for user to choose time frame for the trending movies shown.
  const [timeWindow, setTimeWindow] = useUrlSearchParams({
    timeWindow: "week",
  });

  const { data, isError, error, isLoading } = useQuery(
    ["trending-us", timeWindow],
    () => getTrending(timeWindow.timeWindow)
  );

  const handleRadioChange = (e) => {
    console.log(e.target.value);
    setTimeWindow({ timeWindow: e.target.value });
  };

  return (
    <div>
      <h1 className="my-4">
        Trending {timeWindow.timeWindow === "week" ? "this Week" : "Today"}
      </h1>

      <div className="text-end mb-3 fs-5 py-3">
        <span className="me-4">Show trending for:</span>
        <span className="me-4">
          <input
            onChange={handleRadioChange}
            type="radio"
            name="time-window"
            value="week"
            checked={timeWindow.timeWindow === "week"}
          />
          <label className="ms-2">this week</label>
        </span>
        <span>
          <input
            onChange={handleRadioChange}
            type="radio"
            name="time-window"
            value="day"
            checked={timeWindow.timeWindow === "day"}
          />
          <label className="ms-2">today</label>
        </span>
      </div>

      <LoadError isLoading={isLoading} isError={isError} error={error} />
      {data && <MoviesWrapper movies={data.results} />}
    </div>
  );
};

export default TrendingPage;

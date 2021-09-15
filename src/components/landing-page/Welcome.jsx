import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="d-flex flex-nowrap flex-column justify-content-between my-5 my-lg-4">
      <h1 className="monoton-font display-6 text-center my-4 my-2">Meet Marvellous Movies</h1>
      <div
        id="welcome-links"
        className=""
      >
        <Link
          as="div"
          className="background-opacity-dark w-75 mx-auto fs-3 py-1 py-md-2 py-lg-3 text-center d-flex justify-content-center align-items-center my-1 my-lg-3"
          to="/movies/trending"
        >
          Trending
        </Link>
        <Link
          as="div"
          className="background-opacity-dark w-75 mx-auto fs-3 py-1 py-md-2 py-lg-3 text-center d-flex justify-content-center align-items-center my-1 my-lg-3"
          to="/movies/top-rated"
        >
          Top Rated
        </Link>
        <Link
          as="div"
          className="background-opacity-dark w-75 mx-auto fs-3 py-1 py-md-2 py-lg-3 text-center d-flex justify-content-center align-items-center my-1 my-lg-3"
          to="/movies/now-playing"
        >
          In Theaters Now
        </Link>
        <Link as="div" className="background-opacity-dark w-75 mx-auto fs-3 py-1 py-md-2 py-lg-3 text-center d-flex justify-content-center align-items-center my-1 my-lg-3" to="/genres/all">
          Browse by Genre
        </Link>
        <Link
          as="div"
          className="background-opacity-dark w-75 mx-auto fs-3 py-1 py-md-2 py-lg-3 text-center d-flex justify-content-center align-items-center my-1 my-lg-3"
          to="/movies/search"
        >
          <span>Search</span>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;

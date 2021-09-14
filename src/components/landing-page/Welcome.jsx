import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      {/* <h1>
        Welcome to <span className="logo-text">Bioscope</span>
      </h1> */}
      <p className="display-6 text-center mt-3 my-2">Meet marvellous movies:</p>
      <div
        id="welcome-links"
        className="d-flex flex-nowrap flex-column justify-content-between my-lg-5"
      >
        <Link
          as="div"
          className="background-opacity-dark w-75 mx-auto fs-3 py-1 py-md-2 py-lg-3 text-center d-flex justify-content-center align-items-center my-1 my-lg-3"
          to="/movies/search"
        >
          <span>Search</span>
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
          to="/movies/trending"
        >
          Trending
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
      </div>
    </>
  );
};

export default Welcome;

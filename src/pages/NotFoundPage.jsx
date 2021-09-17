import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-center mt-5 display-6">
      <p className="">Sorry, could not find what you're looking for... </p>

      <p>
        <Link to="/movies/search">
          <Button size="sm" variant="light" className="mx-3">SEARCH</Button>
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;

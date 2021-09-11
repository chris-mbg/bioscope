import React from "react";
import Container from "react-bootstrap/Container";
import { useViewedContext } from "../../contexts/ViewedContextProvider";
import MovieCard from "../movies/MovieCard";

const Footer = () => {
  const { recentlyViewed } = useViewedContext();

  console.log("footer: ", recentlyViewed);

  return (
    <Container fluid className="bg-dark opacity-75 text-light p-4">
      <Container>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="">
            <p>Application data from: </p>
            <img
              className="fluid"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt=""
            />
          </div>
          <div> &copy; Bioscope </div>
          <div className="">
            {recentlyViewed.length > 0 && (
              <>
                <h3>Recently viewed:</h3>
                <div className="d-flex flex-wrap">
                  {recentlyViewed.map((movie) => (
                    <div key={movie.id} className="overflow-hidden me-1" style={{ maxHeight: '70px', maxWidth: '50px'}}>
                      <MovieCard movie={movie}/>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;

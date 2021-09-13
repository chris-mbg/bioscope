import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useViewedContext } from "../../contexts/ViewedContextProvider";
import MovieCard from "../movies/MovieCard";

const Footer = () => {
  const { recentlyViewed } = useViewedContext();

  console.log("footer: ", recentlyViewed);

  return (
    <Container
      fluid
      className="bg-dark opacity-75 text-light p-1 p-lg-4 position-absolute bottom-0"
    >
      <Row>
        <Col
          xs={12}
          sm={true}
          className="d-flex justify-content-evenly align-items-center flex-wrap mt-2 mt-sm-0"
        >
          <div>
            <p>Application data from: </p>
            <img
              className="fluid h-50"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt=""
            />
          </div>
          <p> &copy; Bioscope </p>
        </Col>
        <Col
          id="recently-viewed"
          xs={{ span: 12, order: "first" }}
          sm={{ span: true, order: "last" }}
        >
          {recentlyViewed.length > 0 && (
            <div className="">
              <h3>Recently viewed:</h3>
              <div className="d-flex justify-content-center flex-wrap">
                {recentlyViewed.map((movie) => (
                  <div
                    key={movie.id}
                    className="overflow-hidden me-1"
                    style={{ maxHeight: "70px", maxWidth: "50px" }}
                  >
                    <MovieCard movie={movie} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

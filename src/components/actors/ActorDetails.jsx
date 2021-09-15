import React, { useState } from "react";
import MoviesWrapper from "../movies/MoviesWrapper";
import imgPrefixUrl from "../../utilities/ImgPrefixUrl";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NoImage from "../utilities/NoImage";
import Button from "react-bootstrap/Button";

const ActorDetails = ({ actor }) => {
  // Variable to make it possible for user to see all movie appearances or selection of 10 movies. 10 is showed as default. 
  const [seeAll, setSeeAll] = useState(false);

  const withImg = () => {
    return (
      <Col lg={{ span: 2, offset: 1 }} className="mb-3 mb-lg-0">
        <div className="d-flex justify-content-center align-items-center position-relative">
          {actor.profile_path ? (
            <img
              src={imgPrefixUrl + actor.profile_path}
              alt={actor.name}
              className="rounded-pill"
              style={{ maxHeight: "40vh" }}
            />
          ) : (
            <NoImage type="actor" />
          )}
        </div>
      </Col>
    );
  };

  const renderContent = () => (
    <>
      <Row className="align-items-center my-5 g-3 p-3 rounded-3 background-opacity-dark">
        {actor.profile_path ? withImg() : null}
        <Col lg={actor.profile_path ? { span: 8, offset: 1 } : 12}>
          <h1 className="text-center display-2">{actor.name}</h1>
          <div className="rounded p-3">
            <p>{actor.biography}</p>
            <Table borderless className="w-75 bg-transparent text-light">
              <tbody>
                <tr>
                  <th>Day of birth: </th>
                  <td>{actor.birthday}</td>
                </tr>
                <tr>
                  <th>Place of birth</th>
                  <td>{actor.place_of_birth}</td>
                </tr>
                {actor.deathday && (
                  <tr>
                    <th>Day of death</th>
                    <td>{actor.deathday}</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      <h2 className="display-5 text-center">Known for</h2>
      <MoviesWrapper
        movies={
          seeAll
            ? actor.movie_credits.cast
            : actor.movie_credits.cast.slice(0, 10)
        }
      />
      {actor.movie_credits.cast.length > 10 && (
        <div className="text-end mt-2">
          <Button
            variant="light"
            onClick={() => setSeeAll((prevState) => !prevState)}
          >
            {seeAll ? "See selection" : "See all movies"}
          </Button>
        </div>
      )}
    </>
  );

  return actor ? renderContent() : null;
};

export default ActorDetails;

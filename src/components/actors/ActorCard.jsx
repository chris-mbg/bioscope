import React from "react";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from "react-router-dom";
import imgPrefixUrl from "../../utilities/ImgPrefixUrl";
import NoImage from "../utilities/NoImage";

const ActorCard = ({ actor }) => {
  return (
    <Card className="h-100 background-opacity-dark card-hover">
      <Link to={`/actors/actor/${actor.id}`}>
        {actor.profile_path ? (
          <Card.Img
            className=""
            variant="top"
            src={imgPrefixUrl + actor.profile_path}
            style={{ maxHeight: "180px", objectFit: "contain" }}
          />
        ) : (
          <NoImage type="actor" />
        )}
        <Card.Body>
          <Card.Title className="text-center">{actor.name}</Card.Title>
          <hr className="my-1" />
          <Row className="" xs={1} sm={2}>
            <Col className="fw-bold">Character: </Col>
            <Col>{actor.character}</Col>
          </Row>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ActorCard;

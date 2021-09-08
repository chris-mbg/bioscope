import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ActorCard from "./ActorCard";

const ActorsWrapper = ({ actors }) => {
  return (
    <Row xs={2} sm= {2} md={3} lg={4} xl={5} className="g-3 mx-auto mb-3">
      {actors && actors.map((person) => (
        <Col key={person.id}>
          <ActorCard actor={person} />
        </Col>
      ))}
    </Row>
  );
};

export default ActorsWrapper;

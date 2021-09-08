import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import imgPrefixUrl from "../utilities/ImgPrefixUrl";
import NoImage from "./NoImage";

const ActorCard = ({ actor }) => {
  return (
    <Card className="h-100 bg-light shadow">
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
          <Table className="m-0 table-borderless fs-6">
            <tbody>
              <tr>
                <th>Character</th>
                <td>{actor.character}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ActorCard;

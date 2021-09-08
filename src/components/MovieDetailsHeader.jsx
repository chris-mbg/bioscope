import React from "react";
import imgPrefixUrl from "../utilities/ImgPrefixUrl";

const MovieDetailsHeader = ({ title, img, tagline, score }) => {
  return (
    <>
      <h1>{title}</h1>
      <img src={imgPrefixUrl + img} alt={title} />
      <p>{tagline}</p>
      <p>Score: {Math.round(score)} / 10</p>
    </>
  );
};

export default MovieDetailsHeader;

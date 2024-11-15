import React from 'react';
import './MovieCard.scss';
const MovieCard = ({ data }) => {
  console.log(data);
  return <div>{data.Poster}</div>;
};

export default MovieCard;

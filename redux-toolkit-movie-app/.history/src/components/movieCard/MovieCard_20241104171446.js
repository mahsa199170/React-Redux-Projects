import React from 'react';
import './MovieCard.scss';
const MovieCard = ({ data }) => {
  console.log(data);
  return <div>{data.Title}</div>;
};

export default MovieCard;

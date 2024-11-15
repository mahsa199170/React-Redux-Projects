import React from 'react';
import './MovieCard.scss';
const MovieCard = ({ data }) => {
  console.log(data);
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={data.Poster} alt={data.Title} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

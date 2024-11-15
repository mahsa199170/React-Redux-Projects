import React from 'react';
import './MovieCard.scss';
const MovieCard = ({ data }) => {
  console.log(data);
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={data.poster} alt="poster" />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

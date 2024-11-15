import React from 'react';
import './MovieDetails.scss';
import { fetchMovies, movieSelector } from '../../features/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

const MovieDetails = () => {
  const dispatch = useDispatch();
  const movies = useSelector(movieSelector);
  return <div>i am movie details</div>;
};

export default MovieDetails;

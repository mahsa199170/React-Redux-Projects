import React, { useEffect } from 'react';
import './MovieDetails.scss';
import {
  fetchMovies,
  fetchShowOrMovieDetails,
  movieSelector,
} from '../../features/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const movies = useSelector(movieSelector);

  useEffect(() => {
    dispatch(fetchShowOrMovieDetails(id));
  });
  return <div>i am movie details</div>;
};

export default MovieDetails;

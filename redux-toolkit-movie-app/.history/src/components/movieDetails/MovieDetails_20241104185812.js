import React, { useEffect } from 'react';
import './MovieDetails.scss';
import {
  fetchMovies,
  fetchShowOrMovieDetails,
  showOrMovieSelector,
} from '../../features/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(showOrMovieSelector);

  console.log(data);

  useEffect(() => {
    dispatch(fetchShowOrMovieDetails(imdbID));
  }, [dispatch, imdbID]);
  return <div>i am movie details</div>;
};

export default MovieDetails;

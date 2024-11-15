import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, movieSelector } from '../../features/movieSlice';

const Movielisting = () => {
  const movies = useSelector(movieSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return <div>i am mmovie listimg</div>;
};

export default Movielisting;

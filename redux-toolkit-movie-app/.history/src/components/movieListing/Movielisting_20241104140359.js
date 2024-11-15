import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../features/movieSlice';

const Movielisting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return <div>i am mmovie listimg</div>;
};

export default Movielisting;
